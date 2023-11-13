import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect, useRouter  } from "next/navigation";
import { SidebarGlobal } from "@/components/side-bar";
import { dados } from "./data";

import Navbar from "@/components/homepage/nav-bar";
import Phots from "../(pages)/PagesUser/cardsElements/Phots";
import MenuHomer from "./nav-bar";
import BodyInital from "../(pages)/PagesUser/iaPages/IaElement";


export default async function Home() {
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    const ls = await dados()

    
    
  return (
    <main className="flex">
            <MenuHomer />
        <aside className="w-48">
            <SidebarGlobal />
        </aside>
        
    </main>
  )
}
