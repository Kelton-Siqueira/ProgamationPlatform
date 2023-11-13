import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect, useRouter  } from "next/navigation";
import { SidebarGlobal } from "@/components/side-bar";
import { dados } from "./data";
import PostBody from "./postElements";
import MenuHomerCards from "../cardsElements/nav-bar";


export default async function Home() {
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    const ls = await dados()

    
    
  return (
    <main className="flex ">
        <div className="z-40  h-10 fixed bg-blue-500">
            <MenuHomerCards />
        </div>
        <aside className="w-48">
            <SidebarGlobal />
        </aside>
        <div className=" z-0 flex justify-between items-center my-8 p-4 ">
        {ls ? <PostBody ls={ls} /> : ''}      
        </div>
    </main>
  )
}
