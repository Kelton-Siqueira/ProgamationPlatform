import { Home, Image as Imagels, MailPlus, User } from "lucide-react"
import Link from "next/link"
export const Menu = () =>{

    return(
        <div className="flex flex-col  justify-center items-center w-60 h-143">
            <div  className=" flex flex-col items-center bg-slate-200   w-60 h-143 fixed">
            <Link href={"/Apphome"}  className=" w-40 mx-10 transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <Home /> Home
                </Link>
                <Link href={"/posts"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <MailPlus /> Posts
                </Link>
                <Link href={"/photos"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <Imagels /> Image
                </Link>
                <Link href={"/users"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <User /> User
                </Link>
                <article className="bg-zinc-800 h-[0.5px] flex items-center justify-center w-40"></article>
                
                <Link href={"/Apphome"}  className=" w-40 mx-10 transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <Home /> Home
                </Link>
                <Link href={"/posts"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <MailPlus /> Posts
                </Link>
                <Link href={"/photos"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <Imagels /> Image
                </Link>
                <Link href={"/users"} className=" w-40  mx-10  transition ease-in-out delay-10 bg-violet-400 hover:-translate-y-1 hover:scale-110  duration-300  flex gap-4 my-2 hover:bg-purple-900 hover:text-white cursor-pointer p-3 rounded-full">
                <User /> User
                </Link>
            </div>
            
        </div>
    )
}