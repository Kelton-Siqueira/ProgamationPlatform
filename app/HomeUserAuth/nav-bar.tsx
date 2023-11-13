'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import NotificationLs from "./notification";
import { UserNavGlobal } from "../../components/use-nav";




export default function MenuHomer(){
    const [ls, setLs] = useState(false)

    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null
    return (
        <div className="flex justify-between items-center fixed overflow-y-hidden w-screen bg-slate-400  p-2">
            <Link href={"/homerUser"} className="font-extrabold mx-8">
                <span className="font-extralight">Logo</span>Bar
            </Link>
           
            <nav className="mx-4 gap-5">
                <div className="flex gap-5 justify-center items-center mx-5">
                    <NotificationLs />
                    <UserNavGlobal />
                </div>
            </nav>
        </div>
    )
}