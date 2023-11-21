import { NextRequest, NextResponse } from "next/server"
import prisma from '@/lib/db'


export async function GET(req: NextRequest){

    try{
        const user = await prisma.postUsers.findMany();
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
        const { title, body } = await req.json();
        const user = await prisma.postUsers.create({
            data: {
                title,
                body
            },
        })

        return Response.json({Message: 'POST', user}, {status: 200})
    }catch(error){
            return NextResponse.json({
                Message: 'ERROR',
                error
            }, {status: 500})
    }

}


export async function DELETE(req:Request ) {
    const { id } = await req.json()
    try{
        const user = await prisma.postUsers.delete({
            where: {
                id
            }
        })
        console.log(JSON.stringify(user))
        return Response.json({Message: 'DELETE', user}, {status: 200})
    }
    catch(error){
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, {status: 500})
}
}

export async function PUT(req:Response) {
    const { id, title, body } = await req.json()
    try{
        const user = await prisma.postUsers.update({
            where: {
                id
            },
            data: {
                title,
                body,
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
