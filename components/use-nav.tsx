'use client '
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui//dropdown-menu"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect, useRouter } from "next/navigation"
import { dados } from "./data"
  
  export function UserNavGlobal() {
    const router = useRouter()
    const supabase =  createClientComponentClient()
    const handler = async () => {
        await supabase.auth.signOut()
        router.refresh()
        router.push("/")
    }
    const profile = async () => {
        const supabase =  createClientComponentClient()
        const ls = await supabase.auth.getUser()
        const {data} =  ls
        console.log('cliclou')
        return data.user
    }
    const yourname = async () => {
        const data = await dados();
        const profiles = data.user
        console.log(profiles)
        return profiles
    }
    const lst = profile().then((e) => e?.email)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-200" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{}</p>
              <p className="text-xs leading-none text-muted-foreground">
               {lst}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="">
            <DropdownMenuItem className="cursor-pointer" onClick={yourname}>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handler}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }