'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import ButtonPost from "./postSubmit"
import PostFormModel from "./postFormModel"

interface lt {
    id: number;
}

export function DialogPost({  id }: lt) {
    const [body, setBody] = useState('')
    const [repost, setRepost] = useState(false)
    const [title, setTitle] = useState('')
    const [isDisable, setIsDisable] = useState(false)
    const router = useRouter();
    const [ls, setLs] = useState(false)
   


    const handle = async () => {
        setIsDisable(true)
        try {
            const response = await fetch("/api/PostUsers", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    id
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

    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null

    const ms = true
  return (
<Dialog>
      <DialogTrigger asChild>
        <button><Pencil /> </button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[425px] h-[450px] bg-white rounded-2xl flex justify-center items-center shadow-black">
      <main className="flex items-center flex-col">
            
            <label>Title</label>
            <input type="text" required className="border" onChange={(e) => setTitle(e.target.value)} placeholder="title"  />
            <label>Body</label>
            <textarea  required onChange={(e) => setBody(e.target.value)} className="h-20 border" />
           <ButtonPost handle={handle} isDisable={isDisable} />
        </main>
      </DialogContent>
    </Dialog>
  )
}
