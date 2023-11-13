
import ImageReqs from "./imageReq"
import MenuHomerCards from "../cardsElements/nav-bar"
import MenuIAimages from "./nav-bar"
import { SidebarGlobal } from "@/components/side-bar"

export default function IAimages(){
    return(
        <div className="flex">
            <div>
                <MenuIAimages />
            </div>
            <aside>
                <SidebarGlobal />
            </aside>
            <div className="flex z-10 items-center flex-col rounded-xl justify-center  w-full h-screen">
                <ImageReqs />
            
            </div>
        </div>
    )
}