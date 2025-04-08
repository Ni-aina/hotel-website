"use client";
import BackgroundUI from "@/components/BackgroundUI";
import RoomsCard from "@/components/Cards/RoomsCard";
import Image from "next/image";
import { useRef } from "react";

const RoomsPage = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    }

    return (
        <>
            <BackgroundUI>
                <h1 className="text-4xl font-bold text-center">Rooms and Suites</h1>
                <p className="max-w-[630px] px-10 font-semibold text-center">
                    The elegant luxury bedrooms in this gallery showcase custom interior
                    designs & decorating ideas. View pictures and find your
                    perfect luxury bedroom design.
                </p>
                <Image
                    src="/images/rooms/scroll-down.png"
                    alt="video filter"
                    className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                    width={50}
                    height={90}
                    priority
                    onClick={handleScroll}
                />
            </BackgroundUI>
            <div ref={targetRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:gap-10 w-full px-5 lg:px-10 py-10 lg:py-20">
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <RoomsCard key={index} />
                    ))
                }
            </div>
        </>
    );
}

export default RoomsPage;