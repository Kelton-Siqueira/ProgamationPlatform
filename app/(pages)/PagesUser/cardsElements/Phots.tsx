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
    }];
    seache: string;
}

interface lt {
    ls:{
        e: string;
        i:number;
    };
    
}

export default function Phots({ ls, seache}: ele){
    const dados = ls
    const forDados = []
    const route = useRouter()

    const news = []
    console.log(seache)

    for(let i = 0; i < 18; i++){
            if(!!seache){
                if(ls[i].title.indexOf(seache) != -1){
                console.log(ls[i].title)
                     news.push(ls[i])
                     console.log(forDados)
                }
            }
            
        else{
            forDados.push(ls[i])
        
    }}

    
   
    
    return(
        <div className="flex items-center justify-center z-5">
           <div className=" grid grid-cols-3">
           {!seache ? 
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
            }) : 
            news.map(({ url, title, id}) => {
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