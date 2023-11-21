import { Separator } from "@/components/ui/separator";
import { dados } from "./data";

interface ele {
    seache:string;
}

interface Posts {
        id:number;
        title:string;
        body:string;
}

     

export default async function PostBody({seache }: ele){
    const dado = []
    const dadosbrutos = await dados()
    const ls = dadosbrutos.user
    try{
        
        for(let i = 0; i < ls.length; i++){
            dado.push(ls[i])
        }
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