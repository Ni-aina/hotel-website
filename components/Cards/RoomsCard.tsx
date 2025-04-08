import Image from "next/image";

const RoomsCard = () => {
    return (
        <div className="w-full">
            <div className="relative w-full min-h-[150px] sm:min-h-[250px]">
                <Image
                    src={"/images/rooms/bed-room.png"}
                    alt="bed room"
                    className="object-cover"
                    fill
                    priority
                />
            </div>
            <div className="flex flex-col justify-center gap-1 lg:gap-2 text-maroon-light shadow-lg "
                style={{ fontFamily: "Mulish" }}
            >
                <div className="p-2 lg:p-4">
                    <div className="flex justify-between items-baseline w-full">
                        <h1 className="text-xl lg:text-2xl font-semibold">
                            The Royal Room
                        </h1>
                        <p>Available: Yes</p>
                    </div>
                    <p style={{ fontFamily: "Poppins" }} className="text-sm lg:text-base mt-1.5 lg:mt-3">
                        ₦190,000
                    </p>
                </div>
                <hr className="text-maroon-light w-full h-0.5" />
                <div className="flex flex-wrap justify-between items-center w-full p-2 lg:p-4 mb-2 gap-4">
                    <Image
                        src={"/images/rooms/icons.png"}
                        alt="icons"
                        width={150}
                        height={32}
                    />
                    <button className="text-sm md:text-md lg:text-lg cursor-pointer bg-maroon-light hover:bg-maroon text-white px-4 xl:px-6 py-2">
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomsCard;