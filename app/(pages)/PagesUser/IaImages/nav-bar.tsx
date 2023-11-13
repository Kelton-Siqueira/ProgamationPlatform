'use client'

import NotificationLs from "@/app/HomeUserAuth/notification";
import { UserNavGlobal } from "@/components/use-nav";
import { DialogDemo } from "@/components/homepage/dilog";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Input } from "postcss";
import { useEffect, useState } from "react";




export default function MenuIAimages(){
    const [ls, setLs] = useState(false)

    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null
    return (
        <div className="flex z-40 justify-between items-center fixed overflow-y-hidden w-screen bg-indigo-300  p-4">
            <Link href={"/HomeUserAuth"} className="font-extrabold mx-8">
                <span className="font-extralight">Logo</span>Bar
            </Link>
            <nav className=" gap-5 flex justify-center items-center mx-10">
                <div className="flex gap-5  justify-center items-center">
                    <NotificationLs />
                    <UserNavGlobal />
                </div>
            </nav>
        </div>
    )
}