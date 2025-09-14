import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus("Failed to send message. Try again later.");
                }
            );
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12 md:mt-30">
            <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
                Get in Touch
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>
    );
};

export default ContactForm;
