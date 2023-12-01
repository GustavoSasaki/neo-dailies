import { DailieGroup } from "@/types/Dailie";
import { getExpireDate } from "@/types/ExpireTime";
import { useCookies } from "react-cookie";
import { GenericButton } from "./GenericButton";
import { useClient } from "./useClient";

export function OpenDaylieButton({ name, title, links, expiresDefault }: DailieGroup) {
    const [cookies, setCookie] = useCookies([name]);
    const hasVisited = cookies[name] as boolean
    const client = useClient()

    const groupExpireOpt = { expires: getExpireDate(expiresDefault) }

    const onClick = () => {
        let hour = new Date().getHours()

        links.forEach(dailie => {
            const offTime = dailie.timeOf?.find(({ start, end }) => hour >= start && hour <= end)

            if (!cookies[dailie.name] && !offTime) {
                if (typeof dailie.url === 'string')
                    window.open(dailie.url, '_blank')
                else
                    dailie.url.forEach(link => window.open(link, '_blank'))

                if (dailie.expiresIn) {
                    const dailieExpireTime = getExpireDate(dailie.expiresIn)

                    setCookie(dailie.name, 'true', { expires: dailieExpireTime })
                } else {
                    setCookie(dailie.name, 'true', groupExpireOpt)
                }
            }
        })

        setCookie(name, 'true', groupExpireOpt)
    }

    return (
        <>
            {!hasVisited && client &&
                <GenericButton onClick={onClick}>
                    {title ?? name}
                </GenericButton>
            }

        </>
    )
}
