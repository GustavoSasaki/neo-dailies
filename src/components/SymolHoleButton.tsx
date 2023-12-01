import { getExpireDate } from "@/types/ExpireTime";
import { useCookies } from "react-cookie";
import { GenericButton } from "./GenericButton";
import { SymolHoleInfo } from "./getSymolHolePeriod";
import { useClient } from "./useClient";
import { useMinutes } from "./useMinutes";

export function SymolHoleButton(symolhole: SymolHoleInfo) {

    const [cookies, setCookie] = useCookies(['symolhole']);
    const hasVisited = cookies['symolhole'] as boolean
    const client = useClient()
    const currMinute = useMinutes()
    const smollTime = currMinute >= symolhole.start && currMinute <= symolhole.end + 1

    const onClick = () => {
        window.open('https://www.neopets.com/medieval/symolhole.phtml', '_blank')
        setCookie('symolhole', 'true', { expires: getExpireDate(1) })
    }

    if (hasVisited || !client) {
        return <></>
    }

    return (
        <>
            {smollTime ?
                <GenericButton
                    onClick={onClick}
                >
                    Symol Hole Time
                </GenericButton>
                :
                <p className="m-auto" key={'symolhole'}>
                    Symol Hole Time: {symolhole.start} and {symolhole.end}
                </p>
            }
        </>
    )
}