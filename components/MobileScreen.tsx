"use client"

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileScreen = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState<boolean>();
    const toggleMenu = ()=> setShowMenu(prev => !prev);

    return (
        <div
            className="grid grid-cols-2 text-sm"
        >
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={35}
                        height={35}
                    />
                </Link>
            </div>
            <div className="relative text-end">
                <button onClick={toggleMenu}>
                    <Menu size={30} className="cursor-pointer text-maroon-light" />
                </button>
                {
                    showMenu &&
                    <div className="bg-white p-2 absolute top-0 right-0">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <X size={20} className="text-maroon" />
                        </button>
                        <nav className="text-start flex flex-col space-y-2">
                            <Link href="/" className={`hover:text-maroon-light ${pathname === "/" && 'text-maroon-light'}`}>Home</Link>
                            <Link href="/explore" className={`hover:text-maroon-light ${pathname === "/explore" && 'text-maroon-light'}`}>Explore</Link>
                            <Link href="/rooms" className={`hover:text-maroon-light ${pathname === "/rooms" && 'text-maroon-light'}`}>Rooms</Link>
                            <Link href="/about" className={`hover:text-maroon-light ${pathname === "/about" && 'text-maroon-light'}`}>About</Link>
                            <Link href="/contact" className={`hover:text-maroon-light ${pathname === "/contact" && 'text-maroon-light'}`}>Contact</Link>
                            <Link href="/book-now" className={`hover:text-maroon-light ${pathname === "/book-now" && 'text-maroon-light'}`}>Book now</Link>
                        </nav>
                    </div>
                }
            </div>
        </div>
    );
}

export default MobileScreen;