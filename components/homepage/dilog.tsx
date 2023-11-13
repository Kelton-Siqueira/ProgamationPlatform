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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CreateAccountLoginForm from "../auth/CreateLoginForm "
import CreateAccountForm from "../auth/CreateAccountForm"
import { useEffect, useState } from "react"

export function DialogDemo({ sub, types }: any) {
    const [ls, setLs] = useState(false)

    useEffect(() =>{
        setLs(true)
    }, [])

    if(ls) null

    const ms = true
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" rounded-full border-none my-[0.2rem] hover:bg-slate-500 hover:text-white text-white bg-black " variant="outline">{types}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[450px] bg-white rounded-2xl flex justify-center items-center shadow-black">
        {sub ? <CreateAccountLoginForm /> : <CreateAccountForm />}
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
