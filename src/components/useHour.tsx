import { useState } from "react"

export function useHour(){
    let time  = new Date().getHours()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().getHours()
      setTime(time)
    }
    setInterval(UpdateTime,1000*60)

    return ctime
}