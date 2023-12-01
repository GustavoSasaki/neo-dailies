import { useCookies } from "react-cookie";
import { GenericButton } from "./GenericButton";
import { useClient } from "./useClient";

const endOfDay = new Date()
endOfDay.setUTCHours(23, 59, 59, 999)

const dayWorth = [23, 25, 5, 14, 31, 2, 24, 1, 3]
const curDay = (new Date()).getDay()
const isWorthDay = !!dayWorth.find(x => x === curDay)
const isGrundoMaybeDay = curDay === 23

export function ConcertButton() {
    const [cookies, setCookie] = useCookies(['concert_ticket']);
    const hasVisedConcert = cookies['concert_ticket'] as boolean
    const client = useClient()

    return (
        <>
            {!isWorthDay && !hasVisedConcert && client &&
                <GenericButton
                    onClick={() => {
                        window.open('https://www.neopets.com/prehistoric/ticketbooth.phtml', '_blank')
                        setCookie('concert_ticket', true, { expires: endOfDay })
                    }}
                >
                    {!isGrundoMaybeDay ? 'Buy Tickets' : 'Buy only if Gruundo'}
                </GenericButton>
            }
        </>
    )
}


const worthConcerts = ['Gruundo', 'Jub Zambra and the Cobrall Charmers', 'Mellow Marauders ',
    'Moehawk', 'Neopian Philharmonic', 'The Hikalakas', 'Twisted Roses', 'Wock Til You Drop']

//source: https://www.jellyneo.net/?go=concerts