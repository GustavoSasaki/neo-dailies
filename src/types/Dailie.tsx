import { ExpireTime } from "./ExpireTime"

export type Dailie = {
    url: string | string[],
    name: string,
    expiresIn?: ExpireTime
    timeOf?: {start:number, end:number}[]
}


export interface DailieGroup {
    name: string,
    links: Dailie[],
    expiresDefault?: ExpireTime
    title?: string
}

