

import { SidebarGlobal } from "@/components/side-bar"
import MenuIAimages from "../IaImages/nav-bar"
import InputChat from "./InputChat"

export default function ChatGenerete(){
    return(
        <div className="flex">
            <div>
                <MenuIAimages />
            </div>
            <aside>
                <SidebarGlobal />
            </aside>
            <div className="flex z-10 items-center flex-col rounded-xl justify-center  w-full h-screen">
                <InputChat />
            
            </div>
        </div>
    )
}