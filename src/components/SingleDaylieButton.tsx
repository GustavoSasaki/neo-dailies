import { Dailie } from "@/types/Dailie";
import { getExpireDate } from "@/types/ExpireTime";
import { useCookies } from "react-cookie";
import { GenericButton } from "./GenericButton";
import { useClient } from "./useClient";
import { useHour } from "./useHour";

export function SingleDaylieButton({ url, name, expiresIn, timeOf }: Dailie) {
    const [cookies, setCookie] = useCookies([name]);
    const hasVisited = cookies[name] as boolean
    const client = useClient()
    const groupExpireOpt = { expires: getExpireDate(expiresIn) }
    const hour = useHour()
    const offTime = timeOf?.find(({ start, end }) => hour >= start && hour <= end)


    const onClick = () => {
        if (typeof url === 'string')
            window.open(url, '_blank')
        else
            url.forEach(link => window.open(link, '_blank'))
        setCookie(name, 'true', groupExpireOpt)
    }

    return (
        <>
            {!hasVisited && client &&
                (!offTime
                    ? <GenericButton
                        onClick={onClick}
                    >
                        {name}
                    </GenericButton>
                    : <p className="m-auto" key={name}>{name} goes back at {offTime.end}</p>
                )

            }

        </>
    )
}
