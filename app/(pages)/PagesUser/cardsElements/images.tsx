'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";
interface imges{
    title: string,
    url: string;
    modal?:boolean;
}
import { useRouter } from "next/navigation";
export default function Imgesls({ title, url, modal}:imges){
    const route = useRouter()
    return(
        <div className=" flex items-center justify-center flex-col m-2 py-8">
            <div className=" bg-slate-500 cursor-pointer flex items-center  m-2 justify-center  flex-col gap-2 w-[24rem] h-full">
                    <div className=" hover:scale-95 hover:bg-purple-600 hover:z-40 flex flex-col gap-4">
                    <div className=" h-full     w-full  flex justify-center items-center">
                        <Image                         
                        alt={title} 
                        src={url} 
                        width={400}
                        height={400}
                        />
                     </div>
                     
                 </div>
                 <div className="h-20 m-4 p-4">
                    <h1 className="flex justify-center p-1 my-3">{title}</h1>
                 </div>
                    </div>
                    {modal ? (
                        <Button onClick={() =>{
                            route.back()
                        }} className="bg-red-500 h-10">Retorna</Button> 
                    ) : ''}
        </div>
    )
}