import { useEffect, useState } from "react";
import About from "./About.jsx";
import Projects from "./Projects";

// AnimatedText Component
const AnimatedText = ({ text }) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            {displayed}
        </h1>
    );
};

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-16 bg-gray-900 text-gray-100">

            {/* Hero Section */}
            <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            >
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around space-y-8 md:space-y-0 md:space-x-12 py-8 md:py-0">

                    {/* Text Section */}
                    <div className="text-center md:text-left max-w-md">
                        <AnimatedText text="Rijushree Guha" />
                        <p className="mt-4 text-pink-300 text-xl font-semibold tracking-wide">
                            Software Developer | Automation Engineer
                        </p>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img
                            src="/images/profile1.jpg"
                            alt="Rijushree Guha"
                            className="w-40 h-40 md:w-100 md:h-100 rounded-full border-4 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                </div>
            </div>

            {/* About Me Section */}
            
            <About />

            {/* Projects Section */}
            <Projects/>


        </div>
    );
};

export default Home;
