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
                version: "fd0f02756ae5c3244cfb45c0603296e7418c07d1501bc6e9463ea2d215d5e38f",
                input: {
                    prompt:  imageUrl,
                    version: "v1.4",
                    scale: 2,
                }
            })
        })

        
     
        let jsonStartProcess  = await startRestorProcess.json()

        let endpointURL = await jsonStartProcess.urls.get
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
                restoreImage = jsonfinalResponse.output
            }else if(jsonfinalResponse.status === 'failed'){
                break
            }else{
                await new Promise((resolver) =>{
                    setTimeout(resolver, 1000)
                })
            }

        }
        console.log(imageUrl, 'url')
    return NextResponse.json({data: restoreImage ? restoreImage : 'failed to restored image'},  )
}