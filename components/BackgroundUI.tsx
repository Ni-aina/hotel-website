import Image from "next/image";

const BackgroundUI = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative width-full min-h-[500px] lg:min-h-[700px]">
            <Image
                src="/images/rooms/video.png"
                alt="video"
                className="object-cover"
                fill
                priority
            />
            <Image
                src="/images/rooms/video-filter.png"
                alt="video filter"
                className="object-cover"
                fill
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 lg:gap-10 text-white"
                style={{ fontFamily: "Mulish" }}
            >
                {children}
            </div>
        </div>
    );
}

export default BackgroundUI;