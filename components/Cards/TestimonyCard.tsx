"use client";

import { useState } from "react";
import { Testimonies } from "@/lib/data";
import Image from "next/image";

type Testimony = NonNullable<typeof Testimonies>;

const TestimonyCard = () => {
    const [testimonies, setTestimonies] = useState<Testimony>(Testimonies);
    const handleStarClick = (index: number, indexStar: number) => {
        setTestimonies((prev: Testimony) => {
            return prev.map((testimony, i) =>
                i === indexStar ? { ...testimony, star: index + 1 } : testimony
            );
        });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8">
            {
                testimonies.map((testimony, indexStar) => (
                    <div key={indexStar} className="grid grid-row-1 gap-4 px-4 lg:px-8 py-5 lg:py-10 bg-light rounded-lg">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <p className="text-sm lg:text-md" style={{ fontFamily: "Poppins" }}>{testimony.date}</p>
                            <div className="flex items-center gap-2">
                                {
                                    Array.from({ length: 5 }, (_, index) => (
                                        <Image
                                            key={index}
                                            src={`${testimony.star > index ? "/images/home/fill-star.png" : "/images/home/empty-star.png"}`}
                                            alt="star"
                                            width={20}
                                            height={20}
                                            className="cursor-pointer"
                                            onClick={() => handleStarClick(index, indexStar)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <p className="mt-5 lg:mt-10 text-justify text-sm" style={{ fontFamily: "Raleway", color: "#454545" }}>
                            <Image
                                src={"/images/home/start-quote.png"}
                                alt="start-quote"
                                width={20}
                                height={20}
                                className="inline-block mr-4 mb-5"
                            />
                            {testimony.text}
                            <Image
                                src={"/images/home/end-quote.png"}
                                alt="end-quote"
                                width={20}
                                height={20}
                                className="inline-block mt-2 ml-2"
                            />
                        </p>
                        <div className="flex items-center gap-4 mt-3 lg:mt-6">
                            <Image
                                src={testimony.profil}
                                alt="profile"
                                width={42}
                                height={42}
                                className="rounded-full"
                            />
                            <h1 className="text-sm text-dark-grey" style={{ fontFamily: "Poppins" }}>{testimony.author}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TestimonyCard;