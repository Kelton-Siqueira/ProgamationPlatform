import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect, useRouter  } from "next/navigation";
import { SidebarGlobal } from "@/components/side-bar";
import { dados } from "../cardsElements/data";
import MenuHomerCards from "../cardsElements/nav-bar";
import BodyInital from "./IaElement";



export default async function Home() {
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    const ls = await dados()

    
    
  return (
    <div className="flex ">
        <MenuHomerCards />
        <div className="flex justify-between">
        <aside className="">
            <SidebarGlobal />
        </aside>
        <main className="">
            <BodyInital  />
        </main>
        </div>
    </div>
  )
}
