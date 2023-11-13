'use client'
import Image from "next/image";
import Imgesls from "./images";
import { useRouter } from "next/navigation";
import DialogDemo from "./Modal";

interface ele {
    ls: [{
        url:string;
        title:string;
        id:number;
    }]
}

interface lt {
    e: string;
    i:number;
}

export default function Phots({ ls}: ele){
    const dados = ls
    const forDados = []
    const route = useRouter()


    for(let i = 0; i < 18; i++){
        forDados.push(ls[i])
    }

    
   
    
    return(
        <div className="flex items-center justify-center z-5">
           <div className=" grid grid-cols-3">
           {
            forDados.map(({ url, title, id}) => {
                return(
                    <div key={id}>
                        <DialogDemo id={id} title={title} > 
                        <div className="">
                        <Imgesls title={title} url={url} />
                    </div>
                    </DialogDemo>
                    </div>
                )
            })}
           </div>
        </div>
    )
}