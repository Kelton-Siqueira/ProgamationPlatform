import { Button } from "@/components/ui/button";
import { LoaderTree } from "next/dist/server/lib/app-dir-module";
import { useRouter } from "next/navigation";

interface lt {
    id: number;
}
export default function DeletPost({ id }:lt){

    const route = useRouter()
    const handle = async () =>{
        try {
            const data = fetch("/api/PostUsers",{
                method: 'DELETE',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  id
                  
                })
              }
            )
        } catch (error) {
            console.log(error, 'Erro no deletPost')
        }
        
        route.refresh()
    }
    
    return(
        <Button onClick={handle} className="flex hover:bg-red-500 justify-end text-2xl">x</Button>
    )
}