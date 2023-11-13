import Imgesls from "@/app/(pages)/PagesUser/cardsElements/images";
import { Button } from "@nextui-org/react";

interface ls {
    params: {
        id:number;
    }
}

export default async function CardPage({ params: { id }}:ls){
    const da = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      const { title,  url} = await da.json()
      
      console.log('modal', id)
    return(
        <div>
            <div className="flex justify-center">
            <Imgesls modal={true} title={title} url={url} />
        </div>
        </div>
    )
}