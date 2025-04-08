import BackgroundUI from "@/components/BackgroundUI";
import Image from "next/image";

const AboutPage = () => {
    return (
        <>
            <BackgroundUI>
                <h1 className="text-4xl font-bold text-center">About us</h1>
                <p className="max-w-[630px] px-10 font-semibold text-center">
                    The elegant luxury bedrooms in this gallery showcase custom interior
                    designs & decorating ideas. View pictures and find your
                    perfect luxury bedroom design.
                </p>
            </BackgroundUI>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start place-items-center gap-10 lg:gap-20 w-full p-10 lg:p-20">
                <div className="flex flex-col items-center gap-5 lg:gap-10">
                    <div className="relative min-w-[150px] min-h-[200px] sm:min-w-[458px] sm:min-h-[513px]">
                        <Image
                            src="/images/about-us/bg-rect.png"
                            alt="background maroon"
                            className="object-cover"
                            fill
                        />
                        <div className="absolute top-5 right-5 lg:top-10 lg:right-10 w-full h-full">
                            <Image
                                src="/images/about-us/manager.png"
                                alt="Manager"
                                className="inline-block object-cover"
                                fill
                            />
                        </div>
                    </div>
                    <h1 className="mt-5 text-lg sm:text-2xl text-semibold text-dark-night" style={{ fontFamily: "Mulish" }}>
                        Chidinma James (Manager)
                    </h1>
                </div>
                <div className="flex flex-col gap-5 text-justify text-xs sm:text-[15px]"
                    style={{ fontFamily: "Mulish" }}
                >
                    <p>
                        The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter.
                        <br />
                        The UN has evolved over the years to keep pace with a rapidly changing world.
                        But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.
                    </p>
                    <p>
                        The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term.
                        The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.
                        On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.
                    </p>
                    <p>
                        The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter.
                        The UN has evolved over the years to keep pace with a rapidly changing world.
                        But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.
                    </p>
                    <p>
                        The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term.
                        The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.
                        On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center py-5 lg:py-10 gap-5 lg:gap-10">
                <h1 className="text-xl lg:text-2xl font-semibold"
                    style={{ fontFamily: "Mulish" }}
                >
                    Clients
                </h1>
                <div className="flex flex-wrap gap-5 lg:gap-10 justify-center items-center px-5">
                    <Image
                        src={`/images/about-us/icon-1.png`}
                        alt="icon-1"
                        className="object-cover"
                        width={76.4}
                        height={45}
                    />
                    <Image
                        src={`/images/about-us/icon-2.png`}
                        alt="icon-2"
                        className="object-cover"
                        width={64}
                        height={64}
                    />
                    <Image
                        src={`/images/about-us/icon-3.png`}
                        alt="icon-3"
                        className="object-cover"
                        width={56.24}
                        height={57}
                    />
                    <Image
                        src={`/images/about-us/icon-4.png`}
                        alt="icon-4"
                        className="object-cover"
                        width={36}
                        height={30}
                    />
                    <Image
                        src={`/images/about-us/icon-5.png`}
                        alt="icon-5"
                        className="object-cover"
                        width={81}
                        height={81}
                    />
                </div>
            </div>
        </>
    );
}

export default AboutPage;