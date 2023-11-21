'use client'
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useState } from "react";


interface FilePreview {
    file: Blob;
    preview: string;
}

export default function InputChat(){

    const [restoredfile, setRestoredFile] = useState<FilePreview | null>()
    const [file, seFiles] = useState<string>('')
    const [ls, setLs] = useState()
    const [inmonted, setInmonted] = useState(false)
    const handleEnhance = async () => {
        try{
          const supabase = createClientComponentClient()
          const res = await fetch("/api/ChatGenerate", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              imageUrl: file,
              
            })
          })
          const restoreImageURL = await res.json()
          console.log(typeof restoreImageURL, 'urlimage')
          setLs(restoreImageURL.data)
          const readImageRes = await fetch(restoreImageURL.data)
  
          console.log(readImageRes, 'read')
          const imageBlob = await readImageRes.blob()
  
            setRestoredFile({
              file: imageBlob,
              preview: restoreImageURL.data
            })
  
        }catch(error){
          console.log('handleEnhancez', error)
        }
      }

      console.log(ls, 'ls')
    return(
        <div className="flex flex-col  ">
            <div className=" break-all">
                <p className="justify-center flex h-64 break-all">
                Olá a todos! Estamos quase em 2022 e ainda não sabemos se existem alienígenas vivendo entre nós, ou não? Talvez a pessoa que está escrevendo isso seja um alienígena. Você nunca vai saber.
                </p>
            </div>


<div className=" w-full flex items-center my-4 gap-2">
            <input className="border   rounded-2xl w-[31.4rem] h-9 outline-none px-5" type="text" onChange={(e) => seFiles(e.target.value)} />
           <Button onClick={handleEnhance}>GeraImg</Button>
            
           </div>
        </div>
    )
}