export type ExpireTime = undefined | number | { minutes: number, hour: number }

const endOfDay = new Date()
endOfDay.setUTCHours(23, 59, 59, 999)

export function getExpireDate( expireTime:ExpireTime){
    if(!expireTime)return endOfDay

    const date = new Date()

    if (typeof expireTime === 'number') {
        date.setHours(date.getHours() + expireTime);
    }
    else {
        date.setTime(date.getTime()
            + (expireTime.hour * 60 * 60 * 1000)
            + (expireTime.minutes * 60 * 1000))
    }

    return date
}