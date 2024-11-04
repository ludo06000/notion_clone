import { CopyMinus, Menu, MenuIcon, MenuSquareIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function SideBar() {

    const menuOptions = (
        <>
            <NewDocumentButton />

            {/* My Documents : */}
            {/* List of documents */}

            {/* Share with Me */}
            {/* List of share */}
        </>
    );

  return (
    <div className="p-2 md:p-5 bg-greay-200 relative">
        <div className="md:hidden">

        </div>
        <Sheet>
            <SheetTrigger>
                <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div>
                    {menuOptions}
                </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        <div className="hidden md:inline">
            {menuOptions}
        </div>
    </div>
  )
}
export default SideBar