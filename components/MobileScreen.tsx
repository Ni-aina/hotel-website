"use client"

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const MobileScreen = () => {
    const pathname = usePathname();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleSheetClose = () => {
        setIsSheetOpen(false);
    };

    return (
        <div
            className="grid grid-cols-2 text-sm"
        >
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={35}
                    height={35}
                />
            </Link>
            <div className="flex items-center justify-end">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Menu size={30} className="cursor-pointer text-maroon-light" />
                    </SheetTrigger>
                    <SheetHeader className="sr-only">
                        <SheetTitle>Navigation menu</SheetTitle>
                        <SheetDescription>
                            Click to change the page
                        </SheetDescription>
                    </SheetHeader>
                    <SheetContent className="p-5 bg-blue-sky border-none w-52 text-white">
                        <nav className="text-start flex flex-col space-y-2">
                            <Link onClick={handleSheetClose} href="/" className={`hover:text-maroon-light ${pathname === "/" && 'text-maroon-light'}`}>Home</Link>
                            <Link onClick={handleSheetClose} href="/explore" className={`hover:text-maroon-light ${pathname === "/explore" && 'text-maroon-light'}`}>Explore</Link>
                            <Link onClick={handleSheetClose} href="/rooms" className={`hover:text-maroon-light ${pathname === "/rooms" && 'text-maroon-light'}`}>Rooms</Link>
                            <Link onClick={handleSheetClose} href="/about" className={`hover:text-maroon-light ${pathname === "/about" && 'text-maroon-light'}`}>About</Link>
                            <Link onClick={handleSheetClose} href="/contact" className={`hover:text-maroon-light ${pathname === "/contact" && 'text-maroon-light'}`}>Contact</Link>
                            <Link onClick={handleSheetClose} href="/book-now" className={`hover:text-maroon-light ${pathname === "/book-now" && 'text-maroon-light'}`}>Book now</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default MobileScreen;