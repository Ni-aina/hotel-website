"use client"

import { useState } from "react";

const ContactForm = () => {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const { fullName, email, message } = data;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setData({
            fullName: '',
            email: '',
            message: ''
        });
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 max-w-[900px] mx-auto my-10 lg:my-20 px-2">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="grid grid-cols-1 gap-4 w-full lg:max-w-[420px]">
                        <label htmlFor="full-name">Fullname</label>
                        <input name="fullName" value={fullName} onChange={handleChange} type="text" className="p-2 outline focus-visible:outline-maroon-light text-dark-grey" placeholder="e.g John Becker" required />
                    </div>
                    <div className="grid grid-cols-1 gap-4 w-full lg:max-w-[420px]">
                        <label htmlFor="email">Email</label>
                        <input name="email" value={email} onChange={handleChange} type="email" className="p-2 outline focus-visible:outline-maroon-light text-dark-grey" placeholder="ejohnbecker@gmail.com" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 w-full">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={message} onChange={handleChange} className="p-2 lg:p-5 lg:min-h-[300px] outline focus-visible:outline-maroon-light text-dark-grey" placeholder="Type your message here" required></textarea>
                </div>
                <div className="flex flex-1 justify-end mt-2 lg:mt-5">
                    <button className="p-2 lg:p-4 min-w-[150px] lg:min-w-[200px] bg-maroon-light text-white text-sm lg:text-lg hover:bg-maroon transition-all duration-300 ease-in-out cursor-pointer">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;