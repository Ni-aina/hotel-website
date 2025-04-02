import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bookItems } from "@/lib/data";
import { Play } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative grid grid-cols-1 bg-light md:grid-cols-2 px-4 lg:px-8">
      <div className="py-5 lg:py-20">
        <h2 className="text-2xl lg:text-5xl text-maroon-light" style={{ fontFamily: "Dancing Script" }}>Paradise view</h2>
        <h1 className="text-4xl lg:text-7xl font-bold text-dark mt-4" style={{ fontFamily: "Raleway" }}>
          Hotel for every
          moment rich in
          emotion
        </h1>
        <p className="text-dark mt-4" style={{ fontFamily: "Raleway" }}>
          Every moment feels like the first time
          in paradise view
        </p>
        <div className="flex flex-wrap gap-5 mt-4 mb-0 md:mb-40 lg:mb-10">
          <button className="cursor-pointer bg-maroon-light hover:bg-maroon text-white px-6 py-2 rounded-full">
            Book now
          </button>
          <button className="cursor-pointer hover:bg-white rounded-full p-0 md:py-2 md:px-6 flex gap-2 items-center text-dark-night">
            <span className="p-2 rounded-full" style={{ backgroundColor: "#00A699" }}>
              <Play size={15} className="text-white" />
            </span>
            <p>Take a tour</p>
          </button>
        </div>
      </div>
      <div className="relative w-full h-[500px] lg:h-auto">
        <Image
          src={"/images/bg-home.png"}
          alt="home"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute col-span-2 lg:col-span-1 bottom-2 lg:bottom-5 left-0 right-0 mx-auto w-[95.5%] p-3
        bg-white rounded-lg flex flex-wrap gap-3 justify-between px-4 shadow-lg">
        {
          bookItems.map((item, index) => (
            <div key={index} className="flex flex-wrap items-baseline gap-4 text-dark-night">
              <Image
                src={item.logo}
                alt={item.name}
                width={15}
                height={15}
              />
              <div>
                <p className="text-md">{item.name}</p>
                <Select>
                  <SelectTrigger className="w-[120px] border-none p-0 bg-transparent shadow-none cursor-pointer text-xs lg:text-md">
                    <SelectValue placeholder={`${item.menu?.at(0)}`} />
                  </SelectTrigger>
                  <SelectContent className="bg-blue text- border-none">
                    {
                      item.menu.map((menu, index) => (
                        <SelectItem key={index} value={menu} className="cursor-pointer text-xs lg:text-md">{menu}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))
        }
        <button className="text-lg cursor-pointer bg-maroon-light hover:bg-maroon text-white px-6 py-2 rounded-md">
          Book now
        </button>
      </div>
    </div>
  );
}

export default HomePage;