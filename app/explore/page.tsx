"use client";
import ExploreCard from "@/components/Cards/ExploreCard";
import { ExploreCards } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const ExplorePage = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [videoIndex, setVideoIndex] = useState(0);
    const handlePause = () => {
        if (isPaused) return setIsPaused(prev => !prev);
        setTimeout(() => {
            setIsPaused(prev => !prev);
        }
        , 200);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isPaused) {
                return setVideoIndex(0);
            }
            setVideoIndex(prev => prev < 5 ? prev + 1 : 0);
        }
            , 2000);
        return () => {
            clearInterval(intervalId);
        }
    }, [isPaused]);

    return (
        <>
            <div className="relative width-full min-h-[300px] lg:min-h-[700px] mb-5 lg:mb-10">

                {
                    !isPaused ?
                        <>
                            <style jsx>
                                {`
                                @keyframes fadeIn {
                                        from {
                                            opacity: 0;
                                        }
                                        to {
                                            opacity: 1;
                                        }
                                    }
                                `}
                            </style>
                            <Image
                                src={`/images/explore/video-${videoIndex}.png`}
                                alt="explore"
                                fill
                                className="object-cover"
                                priority
                                quality={100}
                                style={{
                                    animation: "fadeIn 0.5s ease-in-out",
                                }}
                            />
                            <Image
                                src={"/images/explore/filter-video.png"}
                                alt="video filter"
                                fill
                                className="absolute object-cover z-10 cursor-pointer"
                                onClick={handlePause}
                            />
                            <Image
                                src={"/images/explore/pause-btn.png"}
                                alt="Pause button"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                width={200}
                                height={200}
                                onClick={handlePause}
                            />
                        </>
                        :
                        <Image
                            src={"/images/explore/paused-video.png"}
                            alt="explore"
                            fill
                            className="object-cover cursor-pointer"
                            priority
                            onClick={handlePause}
                        />
                }
            </div>
            <div className="grid grid-cols-1 px-5 lg:px-10 pb-20 gap-20">
                {
                    ExploreCards.map((card, index) => <ExploreCard key={index + card.title} card={card} />)
                }
            </div>
        </>
    );
}

export default ExplorePage;