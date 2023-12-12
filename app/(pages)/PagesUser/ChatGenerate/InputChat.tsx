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
            cache: "no-store",
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
          const readImageRes = await fetch(restoreImageURL.data, {
            cache: "no-store",
          })
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
        <div className="flex flex-col mx-96  ">
            <div className=" w-22 break-all">
                <p className="justify-center flex text-white break-all">
                   {ls} 
                </p>
            </div>


<div className=" w-full flex items-center my-4 gap-2">
            <input className="border text-black text-lg  rounded-2xl w-[31.4rem] h-9 outline-none px-5" type="text" onChange={(e) => seFiles(e.target.value)} />
           <Button onClick={handleEnhance}>GeraImg</Button>
            
           </div>
        </div>
    )
}