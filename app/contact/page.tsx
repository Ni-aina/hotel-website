import BackgroundUI from "@/components/BackgroundUI";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ContactPage = () => {

    return (
        <>
            <BackgroundUI>
                <h1 className="text-4xl font-bold text-center">Contact us</h1>
                <p className="max-w-[630px] px-10 font-semibold text-center">
                    The elegant luxury bedrooms in this gallery showcase custom interior
                    designs & decorating ideas. View pictures and find your
                    perfect luxury bedroom design.
                </p>
            </BackgroundUI>
            <ContactForm />
            <div className="relative w-full h-[200px] lg:h-[459px]">
                <Image
                    src="/images/contact/cart.png"
                    alt="Map"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </>
    );
}

export default ContactPage;