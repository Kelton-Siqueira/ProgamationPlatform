import { Separator } from "@/components/ui/separator";
import { dados } from "../data"
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import BeckButton from "./buttom";
interface Body {
    title: string;
    body: string;
}


export default async function PostPage(params:{params:{ id:string}}){
    try {
        const dadosPost = await dados()
        const postsUser = dadosPost.user
        const elemento = decodeURIComponent(params.params.id)
        console.log(elemento, 'elemento')
        return (
            <div>
                {
                    postsUser.map((e:Body) => {
                        if(e.title === elemento){
                            return(
                                <div className="flex gap-4 justify-center overflow-hidden h-screen items-center flex-col" key={e.title}>
                                    
                                    <h1 className="md:text-6xl text-5xl flex justify-center items-center m-10 md:m-2  absolute top-1 md:top-6 font-extrabold bg-gradient-to-t from-yellow-400 to-green-400 text-transparent bg-clip-text ">Posts Salvo Com Sucesso</h1>
                                    <div className="rounded-lg bg-gradient-to-b from-blue-400 to-purple-400  drop-shadow-2xl  h-96 w-72 flex flex-col hover:h-[26rem] hover:w-80">
                                    
                                        <div className="mx-10 my-10 overflow-clip flex gap-4 flex-col">
                                        
                                        <h1 className="text-xl font-bold text-white">{e.title}</h1>
                                        <Separator className="bg-blue-500" />
                                        <div className="text-white text-base overflow-auto  h-full">
                                            <p>{e.body}</p></div> 
                                        </div>
                                    </div>
                                    <BeckButton />
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    } catch (error) {
        console.log(error, 'erro na pagId')
    }
}