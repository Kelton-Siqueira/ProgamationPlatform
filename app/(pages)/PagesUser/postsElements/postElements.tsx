import { Separator } from "@/components/ui/separator";
import { ObjectEncodingOptions } from "fs";
import { inherits } from "util";

interface ele {
    ls: [{
        id:number;
        title:string;
        body:string;
        
        
    }]
}

interface Posts {
        id:number;
        title:string;
        body:string;
}

     

export default function PostBody({ls}: ele){
    const dado = []
    try{
        
        for(let i = 0; i < 21; i++){
            dado.push(ls[i])
        }
        console.log(dado)
    }catch(error){
        console.log('error', error)
    }
    return(
        <div className="grid grid-cols-3">
            {
                dado.map(({ body, title, id}: Posts) =>{
                    return(
                        <div key={id} className="m-6 bg-slate-200 flex flex-col gap-4 p-4">
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-red-500"/>
                            <p>{body}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}