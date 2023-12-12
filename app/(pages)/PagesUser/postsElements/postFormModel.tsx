import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { dados } from "./data"
import ButtonPost from "./postSubmit"

export default function PostFormModel(){
    const [body, setBody] = useState('')
    const [repost, setRepost] = useState(false)
    const [title, setTitle] = useState('')
    const [id, setId] = useState()
    const [isDisable, setIsDisable] = useState(false)
    const router = useRouter();


    try {
        const lt = async () => {
            const dado = await dados() 
                const ls = await dado.user
                setId(ls)
        }
    
        useEffect(() => {
            lt()
        }, [lt]
        )
    } catch (error) {
        console.log(error, 'erro no PostFormModel')
    }
    const handle = async () => {
        setIsDisable(true)
        try {
            const response = await fetch("/api/PostUsers", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            

            setRepost(true)
            
        } catch (error) {
            console.error('There was a problem with the fetch operation: ' + error);
        }
        router.push(`/PagesUser/postsElements/${title}`)  
    }
    return (
        <main className="flex items-center flex-col">
            
            <label>Title</label>
            <input type="text" required className="border" onChange={(e) => setTitle(e.target.value)} placeholder="title"  />
            <label>Body</label>
            <textarea  required onChange={(e) => setBody(e.target.value)} className="h-20 border" />
           <ButtonPost handle={handle} isDisable={isDisable} />
        </main>
    )
}






/* 'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function PostFormModel(){
    const [body, setBody] = useState('')
    const[repost, setRepost] = useState(false)
    const [title, setTitle] = useState('')
    const route = useRouter();
    console.log(body)
    const handle = async () =>{
        const data = fetch("/api/PostUsers",{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: title,
              body: body,

              
            })
          }
        
        )
        
          setRepost(true)
          redirect("/PagesUser/postsElements")
    }
    
    return (
        <main className="flex items-center flex-col">
            
            { repost ? (
                <div className="bg-red-500 h-10 w-full flex justify-center items-center text-lg">Deseja repostar o post novamente...</div>
            ) : ''}
            <label>Title</label>
            <input type="text" required className="border" onChange={(e) => setTitle(e.target.value)} placeholder="title"  />
            <label>Body</label>
            <textarea  required onChange={(e) => setBody(e.target.value)} className="h-20 border" />
            <Button  onClick={handle}>salve post</Button>
        </main>
    )
} */