import { useState } from "react"

export function useMinutes(){
    let time  = new Date().getMinutes()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().getMinutes()
      setTime(time)
    }
    setInterval(UpdateTime)

    return ctime
}