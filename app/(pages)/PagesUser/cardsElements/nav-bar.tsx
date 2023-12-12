'use client'

import NotificationLs from "@/app/HomeUserAuth/notification";
import { UserNavGlobal } from "@/components/use-nav";
import { DialogDemo } from "@/components/homepage/dilog";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Input } from "postcss";
import { ReactNode, useEffect, useState } from "react";


interface ls {
    children: ReactNode;
}

export default function MenuHomerCards({children}:ls){
    const [ls, setLs] = useState(false)

    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null
    return (
        <div className="flex justify-between  items-center h-16 fixed overflow-y-hidden w-screen bg-zinc-400  p-5 z-40">
            <Link href={"/HomeUserAuth"} className="font-extrabold text-xl  mx-8">
                <span className=" text-transparent bg-clip-text text-xl bg-gradient-to-t from-black to-blue-400">Logo</span>Bar
            </Link>
            <header className="flex gap-10 mx-4 w-96 ">
                {children}
            </header>
            <nav className=" gap-5 flex justify-center items-center mx-10">
                <div className="flex gap-5  justify-center items-center">
                    <NotificationLs />
                    <UserNavGlobal />
                </div>
            </nav>
        </div>
    )
}