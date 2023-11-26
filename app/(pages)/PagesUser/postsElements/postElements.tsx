import { Separator } from "@/components/ui/separator";
import { dados } from "./data";
import PostFormModel from "./postFormModel";
import { DialogDemo } from "./dialogForm";
import { useState } from "react";
import { number } from "zod";
import { Skeleton } from "@nextui-org/react";

interface ele {
    seache:string;
}

interface Posts {
        id:number;
        title:string;
        body:string;
}

     

export default  function PostBody({seache }: ele){
    const [d, setD] =useState([
        {id:0,
        title:'',
        body:''
    }])
    const ltd = async () => {
        try{
           const dado = []
        const dadosbrutos = await dados()
        const ls = dadosbrutos.user
            for(let i = 0; i < ls.length; i++){
                dado.push(ls[i])
                setD(dado)
            }
        }catch(error){
            console.log('error', error)
        }
         return 
    }
    ltd()

    
    return(
        <div><div className="flex flex-col">
        <div className="  flex z-40  relative left[40rem]  justify-end my-5 mx-3 ">
            <DialogDemo />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3  ">
         {
            d[0].body ? (
                d.map(({ body, title, id}: Posts) =>{
                    console.log(body, title)
                    return(
                        <div key={id} className="m-3 h-[23rem] w-[25rem] overflow-y-auto bg-slate-200 flex flex-col gap-1 p-4">
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-red-500"/>
                            <p>{body}</p>
    
                        </div>
                    )
                })
            ) : ''
        }
    </div>
    </div></div>
        
       
    )
}