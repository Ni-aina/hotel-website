import RoomCard from "@/components/Cards/RoomCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bookItems, facilities, rooms } from "@/lib/data";
import { Play } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
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
            src={"/images/home/bg-home.png"}
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
                    <SelectTrigger className="w-[120px] border-none p-0 bg-transparent shadow-none cursor-pointer text-xs lg:text-md focus-visible:ring-0">
                      <SelectValue placeholder={`${item.menu?.at(0)}`} />
                    </SelectTrigger>
                    <SelectContent className="bg-blue text- border-none text-white">
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
      <div
        className="flex flex-col items-center px-4 py-8 lg:py-16 gap-y-2 lg:gap-y-4"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-xl font-bold">Our Facilities</h1>
        <p className="text-dark-night text-md">We offer modern (5 star) hotel facilities for your comfort.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-8 pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        {
          facilities.map((facility, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center py-5 lg:py-10 bg-light rounded-lg">
              <Image
                src={facility.icon}
                alt={facility.title}
                width={40}
                height={40}
              />
              <p className="text-dark-night font-semibold">{facility.title}</p>
            </div>
          ))
        }
      </div>
      <div className="w-full min-h-[1100px] sm:min-h-[750px] md:min-h-[500px] lg:min-h-[600px] relative">
        <Image
          src={"/images/home/hotel-rooms.png"}
          alt="hotel rooms"
          fill
          className="object-cover"
        />
        <Image
          src={"/images/home/hotel-rooms-filter.png"}
          alt="hotel rooms"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 right-0 top-5 bottom-5 mx-auto p-3 flex flex-col items-center">
          <div className="flex flex-col items-center gap-3 text-white">
            <h1 className="text-3xl font-[600px]" style={{ fontFamily: "Raleway" }}>Luxurious Rooms</h1>
            <hr className="w-24 border-2"/>
            <p>All room are design for your comfort</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12">
            {
              rooms.map((room, index) => 
                <RoomCard room={room} key={index} />
              )
            }
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center px-4 py-8 lg:py-16 gap-y-2 lg:gap-y-4">
          <h1 className="text-xl font-bold">Testimonies</h1>
          <p className="text-dark-night text-md">
            Grid Cards which are not finished yet
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;