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
import { TesLs } from "./testcorpo";


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
    <div className="overflow-hidden">
        <TesLs tese={...ls} />
    </div>
  )
}
