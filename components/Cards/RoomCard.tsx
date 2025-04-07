"use client";
import Image from "next/image";

interface RoomCardProps {
    title: string;
    background: string;
    text: string;
}

const RoomCard = ({ room }: {  room: RoomCardProps}) => {
    return ( 
        <div className="rounded-lg p-4 lg:p-5 bg-white max-w-[330px]">
            <div className="relative h-[185px] lg:h-[275px] rounded-md overflow-hidden">
                <Image
                    src={room.background}
                    alt={room.title}
                    fill
                    className="object-cover rounded-md"
                />
                <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-maroon-light rounded-sm p-2 lg:p-3">
                    <p className="text-white text-[10px] lg:text-[12px]">{room.title}</p>
                </div>
            </div>
            <div className="mt-2 lg:mt-4">
                <p className="text-dark text-[10px] lg:text-[14px]">{room.text}</p>
            </div>
        </div>
    );
}
 
export default RoomCard;