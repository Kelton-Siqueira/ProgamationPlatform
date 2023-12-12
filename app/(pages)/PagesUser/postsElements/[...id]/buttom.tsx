'use client'

import { Button } from "@/components/ui/button"
import { redirect, useRouter } from "next/navigation"


export default function BeckButton(){
    const route = useRouter()
    return(
        <Button onClick={() => route.push("/PagesUser/postsElements/") } className="w-32">Voltar</Button>
    )
}