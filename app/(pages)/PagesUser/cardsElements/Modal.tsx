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
import Link from "next/link"
import { ReactNode } from "react"

interface child {
    children: ReactNode;
    title: string;
    id:number;
}

export default function DialogDemo({ children, title, id }:child) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-3  flex-col bg-white items-center justify-center">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          
        </DialogHeader>
        <Link className="" href={`/PagesUser/cardsElements/pagesModal/${id}`}>
        {children}  
        </Link>
      </DialogContent>
    </Dialog>
  )
}
