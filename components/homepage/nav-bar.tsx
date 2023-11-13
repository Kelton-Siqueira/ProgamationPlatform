'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { DialogDemo } from "./dilog";
import { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Menubar from "./menuBar";




export default function Navbar(){
    const [ls, setLs] = useState(false)
    
    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null
    return (
        <div>
            <div className=" z-20 hidden md:flex  items-center justify-between w-screen bg-indigo-300  p-2">
            <div className="font-extrabold mx-5">
                <span className="font-extralight">Logo</span>Bar
            </div>
            <header className="flex gap-10 mx-4">
                <Link className="mx-3 " href={"#section01"}><Button className="hover:bg-purple-500 rounded-full outline-none p-3">Section01</Button></Link>
                <Link className="hover:bg-purple-500 rounded-full outline-none p-3"  href={"#section02"}><Button>section02</Button></Link>
                <Link className="hover:bg-purple-500 rounded-full outline-none p-3"  href={"#section03"}><Button>section03</Button></Link>
            </header>
            <nav className="mx-6 gap-5">
                <div className="flex gap-5 ">
                    <DialogDemo types='login' sub={true} />
                    <DialogDemo types='Create Account' sub={false} />
                </div>
            </nav>
        </div>
            <div className="md:hidden">
            <Menubar />
            </div>
        </div>
    )
}