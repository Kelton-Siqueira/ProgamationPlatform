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
import PostFormModel from "./postFormModel"
import { useEffect, useState } from "react"

export function DialogDemo() {
    const [isLog, setIslog] = useState(false)
    useEffect(()=> {
        setIslog(true)
    }, [])
    if(isLog) null
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="z-40" variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent  className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
            <PostFormModel />
      </DialogContent>
    </Dialog>
  )
}
