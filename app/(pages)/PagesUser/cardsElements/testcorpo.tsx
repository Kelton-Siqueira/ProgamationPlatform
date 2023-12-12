'use client'
import { SidebarGlobal } from "@/components/side-bar"
import Phots from "./Phots"
import { useState } from "react";
import MenuHomerCards from "./nav-bar";

interface ele {
    tese: [{
        url:string;
        title:string;
        id:number;
    }]
}
export const TesLs = ({tese}:ele) => {
    const [inp, setInp] = useState<string>('');
    console.log(inp)
    const ls = tese
    return(


        <div className="flex w-screen ">
            <div className="z-40  h-10 fixed bg-blue-500">
            <MenuHomerCards>
            <input   type="text" onChange={(e) => setInp(e.target.value)} className=" border shadow-none outline-0 text-black text-lg bottom-4  p-4 h-10 w-full rounded-2xl" placeholder="ola mundo"/>
            </MenuHomerCards>
        </div>
        <aside className="w-48">
            <SidebarGlobal />
        </aside>
        <div className=" z-0 flex justify-between items-center my-8 p-4 ">
        <Phots ls={tese} 
        seache={inp}/>       
        </div>
        </div>
    )
}