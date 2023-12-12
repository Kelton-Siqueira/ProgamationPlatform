'use client'
import { Separator } from "@/components/ui/separator";
import { dados } from "./data";
import { DialogDemo } from "./dialogForm";
import { useEffect, useState } from "react";
import DeletPost from "./deletPost";
import { RedirectType, redirect, useRouter } from "next/navigation";
import { DialogPost } from "./dialogPosts";

interface ele {
    seache:string;
}

interface Posts {
        id:number;
        title:string;
        body:string;
}

     

    export default function PostBody({ seache }: ele) {
        const [isLog, setIslog] = useState(false)
        const news = []
        const [d, setD] = useState([
            {
                id: 0,
                title: '',
                body: ''
            }
        ])
        try{
    for(let i = 0; i < d.length; i++){
            if(!!seache){
                if(d[i].title.indexOf(seache) != -1){
                console.log(d[i].title)
                     news.push(d[i])
                }
            }
        }
        }catch(error){
            console.log(error)
        }
        async function ltd() {
            try {
                  const dadosbrutos = await dados()
                const ls = dadosbrutos.user
                setD(ls)
            } catch (error) {
                console.log('error', error)
            }
        }
    
        useEffect(() => {
            ltd()
            setIslog(true)
        }, []) // Adicione um array de dependências vazio aqui
    
        // Resto do seu código...
    
    if(isLog) null
    
    return(
        <div>
            {seache ? ((
        
        <div><div className="flex flex-col">
        <div className="  flex z-40  relative left[40rem]  justify-end my-5 mx-3 ">
            <DialogDemo />
        </div>
 
        
        <div className="grid grid-cols-1 xl:grid-cols-3  ">
         {
            (
                news.map(({ body, title, id}: Posts) =>{
                   if(seache === title){
                    return(
                        <div key={id} onClick={() => console.log(id)}  className=" h-60 w-60  m-3 md:h-[23rem] md:w-[25rem] overflow-y-auto flex flex-col gap-1 p-4">
                            <div className="flex justify-between" onClick={() => redirect("/PagesUser/postsElements", RedirectType.replace)}>
                                <DeletPost  id={id} />
                                <DialogPost id={id} />
                                </div>
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-blue-500"/>
                            <div className="w-full h-full grow break-words overflow-auto">{body}</div>
    
                        </div>
                    )
                   }else{
                    return(
                        <div key={id} onClick={() => console.log(id)}  className=" h-60 w-60  m-3 md:h-[23rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                            <div className="flex justify-between" onClick={() => redirect("/PagesUser/postsElements", RedirectType.replace)}>
                                <DeletPost  id={id} />
                                <DialogPost id={id} />
                                </div>
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-red-500"/>
                            <div className="w-full h-full grow break-words overflow-auto">{body}</div>
    
                        </div>
                    )
                   }
                })
            )
        }
    </div>
    </div></div>
        
       
    
)) : (
    (
        
        <div><div className="flex flex-col">
        <div className="  flex z-40  relative left[40rem]  justify-end my-5 mx-3 ">
            <DialogDemo />
        </div>
 
        
        <div className="grid grid-cols-1 xl:grid-cols-3  ">
         {
            (
                d.map(({ body, title, id}: Posts) =>{
                   if(seache === title){
                    return(
                        <div key={id} onClick={() => console.log(id)}  className=" h-60 w-60  m-3 md:h-[23rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                            <div className="flex justify-between" onClick={() => redirect("/PagesUser/postsElements", RedirectType.replace)}>
                                <DeletPost  id={id} />
                                <DialogPost id={id} />
                                </div>
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-red-500"/>
                            <div className="w-full h-full grow break-words overflow-auto">{body}</div>
    
                        </div>
                    )
                   }else{
                    return(
                        <div key={id} onClick={() => console.log(id)}  className=" h-60 w-60  m-3 md:h-[23rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                            <div className="flex justify-between" onClick={() => redirect("/PagesUser/postsElements", RedirectType.replace)}>
                                <DeletPost  id={id} />
                                <DialogPost id={id} />
                                </div>
                            <h1 className="text-2xl p-5">{title}</h1>
                            <Separator  className="bg-red-500"/>
                            <div className="w-full h-full grow break-words overflow-auto">{body}</div>
    
                        </div>
                    )
                   }
                })
            )
        }
    </div>
    </div></div>
        
       
    
)
)}
        </div>
    )
}






/*{
    !!seache ?  ''  : x
} */