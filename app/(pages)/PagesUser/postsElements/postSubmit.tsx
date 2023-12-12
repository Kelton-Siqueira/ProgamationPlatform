'use client'

import { Button } from "@/components/ui/button";

export default function ButtonPost({ isDisable , handle}: { isDisable: boolean; handle:any }){
    return (
        <Button disabled={isDisable} onClick={handle}>salve post</Button>
    )
}