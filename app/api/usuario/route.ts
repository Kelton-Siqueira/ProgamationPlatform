import { NextRequest, NextResponse } from "next/server"
import prisma from '@/lib/db'


export async function GET(req: NextRequest){

    try{
        const user = await prisma.user.findMany();
        return Response.json({message:"GET", user}, {status:200})
    }catch(Error){
        return NextResponse.json({
            Message: 'ERROR',
            Error
        }, {status: 500})
    }

}

export async function POST(req: NextRequest){

    try{
        console.log('post Dos usuarios')
        const { name, email, id_user } = await req.json();
        console.log(name, email, 'route post')
        const user = await prisma.user.create({
            data: {
                name,
                email,
                id_user
            },
        })

        return Response.json({Message: 'POST', user}, {status: 200})
    }catch(error){
            return NextResponse.json({
                Message: 'ERROR no post',
                error
            }, {status: 500})
    }

}




export async function PUT(req:Response) {
    const { id, name, email } = await req.json()
    try{
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
            }
        })
        console.log(JSON.stringify(user))
        return Response.json({Message: 'PUT', user}, {status: 200})
    }
    catch(error){
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, {status: 500})
}
}
