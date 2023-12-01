import { getExpireDate } from "@/types/ExpireTime";
import { useCookies } from "react-cookie";
import { GenericButton } from "./GenericButton";
import { NeoStockInfo } from "./getBestStock";
import { useClient } from "./useClient";

export function StockButton(bestStock: NeoStockInfo) {

    const [cookies, setCookie] = useCookies(['stock_market']);
    const hasVisited = cookies['stock_market'] as boolean
    const client = useClient()

    const onClick = () => {
        window.open('https://www.neopets.com/stockmarket.phtml?type=buy', '_blank')
        window.open('https://www.neopets.com/stockmarket.phtml?type=portfolio', '_blank')
        navigator.clipboard.writeText(bestStock.ticker)
        setCookie('stock_market', 'true', { expires: getExpireDate(undefined) })
    }


    return (
        <>
            {!hasVisited && client &&
                <GenericButton onClick={onClick}>
                    Buy {bestStock.ticker} stocks, he is selling for ${bestStock.curr}
                </GenericButton>
            }
        </>
    )
}