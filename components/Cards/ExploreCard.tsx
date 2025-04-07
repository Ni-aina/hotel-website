import { ExploreCards } from "@/lib/data";
import Image from "next/image";

type CardProps = NonNullable<typeof ExploreCards>[number];

const ExploreCard = ({ card }: { card: CardProps }) => {
    return (
        <div className="relative w-full h-[200px] lg:h-[570px] my-5 lg:my-10 rounded-2xl">
            <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-2xl"
                priority
                quality={100}
            />
            <div className="absolute grid grid-cols-1 max-w-2xl bottom-[-4rem] left-0 right-0 rounded-xl z-1 bg-white shadow-xl mx-auto">
                <div className="bg-maroon-light rounded-t-xl width-full h-4" />
                <div className="flex flex-col items-center justify-center rounded-xl p-2 lg:p-10 gap-5"
                    style={{ fontFamily: "Raleway" }}
                >
                    <h1 className="text-maroon-light text-sm lg:text-lg">{card.title}</h1>
                    <p className="text-dark-night text-xs lg:text-sm text-center">{card.text}</p>
                </div>
            </div>
        </div>
    );
}
 
export default ExploreCard;