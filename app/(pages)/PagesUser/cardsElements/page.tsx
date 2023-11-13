import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect, useRouter  } from "next/navigation";
import { SidebarGlobal } from "@/components/side-bar";
import { dados } from "./data";
import Phots from "./Phots";
import MenuHomerCards from "./nav-bar";


export default async function Home() {
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    
    const da = await fetch("http://localhost:3000/api/cards", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      const ls = await da.json()
      

    
    
  return (
    <main className="flex ">
        <div className="z-40  h-10 fixed bg-blue-500">
            <MenuHomerCards /> <div></div>
        </div>
        <aside className="w-48">
            <SidebarGlobal />
        </aside>
        <div className=" z-0 flex justify-between items-center my-8 p-4 ">
        <Phots ls={...ls} />       
        </div>
    </main>
  )
}
