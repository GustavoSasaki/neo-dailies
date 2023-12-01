export interface NeoStockInfo {
    curr: number
    ticker: string
}
const worthStockPrices = [15, 16, 17, 18, 19]

export async function getBestStock() {

    const allStocks = await getAllStock()

    if (Array.isArray(allStocks)) {
        for (const price of worthStockPrices) {
            const bestStock = findStock(allStocks, price)

            if (bestStock) return bestStock
        }
    }

    return undefined
}


const regexPattern = /"1d":(\[[^\]]+\])/
async function getAllStock() {
    return fetch('https://neostocks.info/',
        { next: { revalidate: 3600 * 8 } }).then(async x => {
            return await x.text();
        }).then(function (html) {
            const regexCapture = regexPattern.exec(html);


            return JSON.parse(regexCapture?.[1] ?? '') as NeoStockInfo[]
        })
}

function findStock(stocks: NeoStockInfo[], price: number) {
    return stocks.find(s => s.curr === price)
}