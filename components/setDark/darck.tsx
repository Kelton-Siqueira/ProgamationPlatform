'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import Ls from "./Test"

export default function Dark(){


    const [dark, setDark] = useState(false)

    console.log(dark)

    return(
        <><Ls lts={dark} /><Button onClick={() => setDark(dark ? true : false)}></Button></>
    )
}