import { NextRequest } from "next/server";
import { NextResponse } from "next/server"

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export default async function middleware(req: NextRequest){
    const res = NextResponse.next()

    try{ 
        const supabase = createMiddlewareClient({ req, res})
        await supabase.auth.getSession()
    }catch(error){
        console.log("middleware Error", error)
    }
    return res

}