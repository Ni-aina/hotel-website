"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopScreen = () => {
    const pathname = usePathname();

    return (
        <div
            className="flex items-center justify-between"
        >
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
            <nav className="flex space-x-5">
                <Link href="/" className={`hover:text-maroon-light ${pathname === "/" && 'text-maroon-light'}`}>Home</Link>
                <Link href="/explore" className={`hover:text-maroon-light ${pathname === "/explore" && 'text-maroon-light'}`}>Explore</Link>
                <Link href="/rooms" className={`hover:text-maroon-light ${pathname === "/rooms" && 'text-maroon-light'}`}>Rooms</Link>
                <Link href="/about" className={`hover:text-maroon-light ${pathname === "/about" && 'text-maroon-light'}`}>About</Link>
                <Link href="/contact" className={`hover:text-maroon-light ${pathname === "/contact" && 'text-maroon-light'}`}>Contact</Link>
            </nav>
            <Link href="#">
                <button className="border cursor-pointer py-2 px-3  text-white rounded-md bg-maroon-light hover:text-maroon-light hover:bg-white hover:border-maroon-light">
                    Book now
                </button>
            </Link>
        </div>
    );
}

export default DesktopScreen;