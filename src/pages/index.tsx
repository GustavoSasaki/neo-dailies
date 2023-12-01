import { Inter } from 'next/font/google'
import { DailieLinksOne, DailieLinksThree, DailieLinksTwo, DailieLinksZero, DailieQuests, DailieTrash, Poop, SingleDaylies, Wheels } from '@/DailieDatabase'
import { ConcertButton } from '@/components/ConcertButton';
import { OpenDaylieButton } from '@/components/OpenDaylieButton';
import { getSymolHolePeriod } from '@/components/getSymolHolePeriod';
import { SymolHoleButton } from '@/components/SymolHoleButton';
import { getBestStock } from '@/components/getBestStock';
import { StockButton } from '@/components/StockButton';
import { SingleDaylieButton } from '@/components/SingleDaylieButton';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ bestStock, symolHolePeriod }: Awaited<ReturnType<typeof getStaticProps>>['props']) {

  return (
    <>
      <Header />
      <main
        className={`from-amber-200 to-yellow-200 bg-gradient-to-bl min-h-screen w-full py-8 ${inter.className}
        `}

      >

        <div className="mx-8 md:mx-auto md:w-[80%] text-gray-900">

          <section className='py-16'>
            <h2 className='font-medium text-4xl pb-8'>
              Multiple Dailies
            </h2>
            <div className='grid grid-cols-auto-fit gap-x-7 gap-y-9'>
              <OpenDaylieButton {...DailieLinksZero} />

              <OpenDaylieButton {...DailieLinksOne} />

              <OpenDaylieButton {...DailieQuests} />

              <OpenDaylieButton {...DailieLinksTwo} />

              <OpenDaylieButton {...DailieLinksThree} />

              <OpenDaylieButton {...DailieTrash} />

              <OpenDaylieButton {...Wheels} />

              <OpenDaylieButton {...Poop} />
            </div>

            <div />
          </section>
          <section className='py-16'>
            <h2 className='font-medium text-4xl pb-8'>
              Single Dailies
            </h2>
            <div className="grid grid-cols-auto-fit gap-x-7 gap-y-9">

                {bestStock && <StockButton {...bestStock} />}

                <SymolHoleButton {...symolHolePeriod} />

                <ConcertButton />

                {Object.entries(SingleDaylies).map(dailie =>
                  <SingleDaylieButton {...dailie[1]} key={dailie[1].name}/>
                )}


            </div>
          </section>
        </div>
      </main >
    </>
  )
}

export async function getStaticProps() {

  const symolHolePeriod = await getSymolHolePeriod()
  const bestStock = await getBestStock()

  return {
    props: {
      symolHolePeriod,
      bestStock
    },
    revalidate: 3600 * 8
  }
}


/*</div>to-do:
  Compelte aLTADOR plot
  see how enter https://www.neopets.com/prehistoric/battleground/
  isntall flash
  Cliffhanger resolver
  fruit wheel

  talha shop_of_offers
  cook pot
  a https://www.neopets.com/pirates/buriedtreasure/index.phtml button
  make all the three hard efford dailies easier to use

  pass every dailie to singleDailie object
  add auto-animate library
  add remove your shop lucro tot he dailies
  re-render based on clock
  quizz dailie
  fix matgma button
*/