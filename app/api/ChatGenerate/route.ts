import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

interface NextApiRequestWithImage extends NextRequest{
    imageUrl: string
}
export async function POST(req:NextApiRequestWithImage, res:NextResponse){
    const { imageUrl } = await req.json()
    
    const supabase = createRouteHandlerClient({cookies})

    const { data: { session}, error} = await supabase.auth.getSession()

    if(!session || error){
        return new NextResponse("Login is riquered", {status: 404})}

        //Aqui fazemos a requisição via fetch para a api do repilcate
        const startRestorProcess = await fetch("https://api.replicate.com/v1/predictions",{
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: "token r8_X2YZ2rFIZIypAGEwnCXCjOMUt9i2TBw0AxyNF",
            },
            body: JSON.stringify({
                version: "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
                input: {
                    prompt:  imageUrl,
                }
            })
        })

        
     
        let jsonStartProcess  = await startRestorProcess.json()

        let endpointURL = await jsonStartProcess.urls.get
        console.log(endpointURL, 'point')
        let restoreImage:string | null = null
        while(!restoreImage){
            console.log('Pooling image from replicate..')

            let finalResponse = await fetch(endpointURL, {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: "token r8_X2YZ2rFIZIypAGEwnCXCjOMUt9i2TBw0AxyNF",}
            })
            let jsonfinalResponse = await finalResponse.json()

            if(jsonfinalResponse.status === 'succeeded'){
                let ls = jsonfinalResponse.output
                restoreImage = ls.toString().replace(/,/g, '')
            }else if(jsonfinalResponse.status === 'failed'){
                break
            }else{
                await new Promise((resolver) =>{
                    setTimeout(resolver, 1000)
                })
            }

        }
        console.log(restoreImage, 'imagex')
    return NextResponse.json({data: restoreImage ? restoreImage : 'failed to restored image'},  )
}