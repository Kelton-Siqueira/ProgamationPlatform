import { Button } from "@nextui-org/react";
import Link from "next/link";
import { DialogDemo } from "./dilog";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";


export default function Menubar(){
    const[ menubar, setMenuBar] = useState(false)
    return (
        <div>
            {menubar ? (    
                <div className="flex h-screen justify-center bg-indigo-300" >
                    <div className=" z-10 my-3 mx-4" onClick={() => setMenuBar(false)}>
                        <X />
                    </div>
                <aside className="flex  flex-col gap-8 relative right-10 h-96 m-3 items-center w-52">
                <div className="font-extrabold">
                    <span className="font-extralight">Logo</span>Bar
                </div>
                <div className=" flex flex-col">
                    <Link className="hover:bg-purple-500 rounded-full outline-none " href={"#section01"}>
                        <Button className="">Section01</Button></Link>
                    <Link className="hover:bg-purple-500 rounded-full outline-none "  href={"#section02"}><Button>section02</Button></Link>
                    <Link className="hover:bg-purple-500 rounded-full outline-none "  href={"#section03"}><Button>section03</Button></Link>
                </div>
                <div className="flex flex-col">
                        <DialogDemo types='login' sub={true} />
                        <DialogDemo types='Create Account' sub={false} />
                </div>
            </aside>
                </div>
            ) : (
                <div>
                    <div onClick={() => setMenuBar(true)} className=" mx-4 my-7 p-1 bg-indigo-300">
                        <AlignJustify />           
                    </div>
                </div>
            )}
        </div>
    )
}