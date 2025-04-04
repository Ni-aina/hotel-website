const Footer = () => {
    return (
        <div className=" bg-maroon-light w-full pt-8 lg:pt-16 pb-4 lg:pb-8">
            <div className="flex flex-wrap justify-start sm:justify-center px-5 lg:px-10 gap-8 lg:gap-16">
                <div className="text-white max-w-[280px]">
                    <h1 className="text-2xl" style={{ fontFamily: "Dancing Script" }}>
                        Paradise view
                    </h1>
                    <p className="mt-4 text-sm text-justify">
                        The service at the Hotel Monteleone was exceptional.
                        There was absolutely no issue that was not addressed timely and
                        with satisfactory results. We were particulary impressed
                        with how the hotel staff anticipated our needs (periodically coming by
                        the Board Room to check with us)
                    </p>
                </div>
                <div className="text-white max-w-[280px]">
                    <h1 className="text-xl" style={{ fontFamily: "Raleway" }}>
                        Quick links
                    </h1>
                    <p className="mt-4 text-sm">
                        Room booking
                    </p>
                    <p className="mt-2 text-sm">
                        Rooms
                    </p>
                    <p className="mt-2 text-sm">
                        Contact
                    </p>
                    <p className="mt-2 text-sm">
                        Explore
                    </p>
                </div>
                <div className="text-white max-w-[280px]">
                    <h1 className="text-xl" style={{ fontFamily: "Raleway" }}>
                        Company
                    </h1>
                    <p className="mt-4 text-sm">
                        Privacy policy
                    </p>
                    <p className="mt-2 text-sm">
                        Refund policy
                    </p>
                    <p className="mt-2 text-sm">
                        F.A.Q
                    </p>
                    <p className="mt-2 text-sm">
                        About
                    </p>
                </div>
                <div className="text-white max-w-[280px]">
                    <h1 className="text-xl" style={{ fontFamily: "Raleway" }}>
                        Social media
                    </h1>
                    <p className="mt-4 text-sm">
                        Facebook
                    </p>
                    <p className="mt-2 text-sm">
                        Twitter
                    </p>
                    <p className="mt-2 text-sm">
                        Instagram
                    </p>
                    <p className="mt-2 text-sm">
                        LinkedIn
                    </p>
                </div>
                <div className="text-white max-w-[280px] flex flex-col gap-4">
                    <h1 className="text-xl" style={{ fontFamily: "Raleway" }}>Newsletter</h1>
                    <p className="text-justify text-sm">
                        Kindly subscribe to our newsletter to get
                        latest deals on our rooms and vacation
                        discount.
                    </p>
                    <div className="grid grid-cols-2 bg-white p-1 rounded-sm">
                        <input type="email" className="text-maroon focus-visible:outline-none px-2" placeholder="Enter your email" />
                        <button className="text-sm lg:text-md p-2 bg-maroon-light text-white rounded-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr className="my-8" style={{ background: "#D9D9D9" }} />
            <div className="flex flex-col lg:flex-row justify-center items-center px-5 lg:px-10">
                <p className="text-sm text-white">Paradise view 2023</p>
            </div>
        </div>
    );
}

export default Footer;