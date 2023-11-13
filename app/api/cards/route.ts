import { NextRequest, NextResponse } from "next/server";

interface li {
    id: number
}
export async function GET(req: NextRequest, rest: NextResponse) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)

    const data = await res.json()
    return NextResponse.json(data);
}