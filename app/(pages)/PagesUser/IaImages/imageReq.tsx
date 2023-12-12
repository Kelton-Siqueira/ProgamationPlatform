'use client'
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useState } from "react";

interface FilePreview {
    file: Blob;
    preview: string;
}

export default function ImageReqs(){
    const [restoredfile, setRestoredFile] = useState<FilePreview | null>()
    const [file, seFiles] = useState<string>('')
    const [inmonted, setInmonted] = useState(false)
    const handleEnhance = async () => {
        try{
          const supabase = createClientComponentClient()
          const res = await fetch("/api/GenereteIAImages", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              imageUrl: file,
              
            })
          })
          const restoreImageURL = await res.json()
  
          const readImageRes = await fetch(restoreImageURL.data)
  
          const imageBlob = await readImageRes.blob()
  
            setRestoredFile({
              file: imageBlob,
              preview: URL.createObjectURL(imageBlob)
            })
  
        }catch(error){
          console.log('handleEnhancez', error)
        }
      }
      console.log( 'file')

    return(
        <div className="justify-end items-end">
            <div className=" flex-col justify-center items-center gap-3 rounded-md">
                <h1 className="my-4 flex items-center justify-center text-4xl text-zinc-600">API Generete the Images</h1>
                <h2 className="my-5 ">Aqui vemos Uma API Geradora de imagens, Digite o tipo de imagen (em ingles) no campo abaixo.</h2>
            {restoredfile ? (
                <Image className="rounded-md relative left-40 shadow-2xl drop-shadow-2xl" src={restoredfile?.preview ? restoredfile?.preview : "" } width={300} alt="t" height={300} />
            ) : (
                <Image className="rounded-md relative left-32  shadow-2xl drop-shadow-2xl" src={"/accets/loadingImage.jpg" } width={300} alt="t" height={300} />
            )}
           <div className=" w-full flex items-center my-4 gap-2">
            <input className="border  text-black text-lg  rounded-2xl w-[31.4rem] h-9 outline-none px-5" type="text" onChange={(e) => seFiles(e.target.value)} />
           <Button onClick={handleEnhance}>GeraImg</Button>
            
           </div>
        </div>
        
        </div>
    )
}