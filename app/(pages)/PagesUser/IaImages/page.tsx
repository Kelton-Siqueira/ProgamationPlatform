
import ImageReqs from "./imageReq"
import MenuIAimages from "./nav-bar"
import { SidebarGlobal } from "@/components/side-bar"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { RedirectType, redirect } from "next/navigation"
import { cookies } from "next/headers"
export default async function  IAimages(){
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    return(
        <div className="flex">
            <div>
                <MenuIAimages />
            </div>
            <div className="flex justify-between  gap-20 w-full h-full flex-col">
            <aside>
                <SidebarGlobal />
            </aside>
            <div className="flex  z-10 items-center flex-col rounded-xl justify-center  w-full">
                <ImageReqs />
            
            </div>
            </div>
        </div>
    )
}