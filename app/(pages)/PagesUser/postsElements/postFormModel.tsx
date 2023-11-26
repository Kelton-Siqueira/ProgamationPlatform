'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PostFormModel(){
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
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
    }
    return (
        <main className="flex items-center flex-col">
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="title" type="text" />
            <label>Body</label>
            <textarea onChange={(e) => setBody(e.target.value)} className="h-20 bg-red-500" />
            <Button onClick={handle}>salve post</Button>
        </main>
    )
}