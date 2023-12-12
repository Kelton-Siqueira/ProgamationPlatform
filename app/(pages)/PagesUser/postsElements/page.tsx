import { PostTest } from "./PostTest";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function TesLs(){
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    return(
            <div className="overflow-x-hidden">
                <PostTest  />
            </div>
    )
}