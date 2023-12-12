

import { SidebarGlobal } from "@/components/side-bar"
import MenuIAimages from "../IaImages/nav-bar"
import InputChat from "./InputChat"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType, redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function ChatGenerete(){
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    return(
        <div className="flex ">
            <div>
                <MenuIAimages />
            </div>
            <aside>
                <SidebarGlobal />
            </aside>
            <div className="flex z-10  items-center flex-col rounded-xl justify-center  w-full h-screen">
                <InputChat />
            
            </div>
        </div>
    )
}