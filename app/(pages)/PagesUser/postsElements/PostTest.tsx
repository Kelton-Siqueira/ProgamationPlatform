'use client'
import { SidebarGlobal } from "@/components/side-bar"
import { useState } from "react";
import MenuHomerCards from "../cardsElements/nav-bar";
import PostBody from "./postElements";

interface Posts {
        tese: [
            {
                id:number;
            title:string;
            body:string;
            }
        ]
}
export const PostTest = () => {
    const [inp, setInp] = useState<string>('');
    return(
        <div className="flex w-screen overflow-x-hidden">
        <div className="z-40  h-10 fixed bg-blue-500">
        <MenuHomerCards>
        <input type="text" onChange={(e) => setInp(e.target.value)} className=" border bottom-4  p-4 h-10 w-full rounded-2xl" placeholder="ola mundo"/>
        </MenuHomerCards>
    </div>
    <div className="flex gap-2">
    <aside className="w-[14rem]">
        <SidebarGlobal className="hidden md:flex" />
    </aside>
    <div className=" z-0 flex justify-between items-center   my-16 ">
            < PostBody seache={inp} />  
    </div>
    </div>
    </div>
    )
}

