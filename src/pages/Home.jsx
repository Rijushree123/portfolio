import { useEffect, useState } from "react";

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
        }, 150); // 150ms delay between letters
        return () => clearInterval(interval);
    }, [text]);

    return (
        <h1 className="text-4xl md:text-6xl font-bold text-white">
            {displayed}
        </h1>
    );
};

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-12">

            {/* Hero Section */}
            <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-around space-y-8 md:space-y-0 md:space-x-10">

                    {/* Text Section */}
                    <div className="text-center md:text-left max-w-md">
                        <AnimatedText text="Rijushree Guha" />
                        <p className="mt-4 text-rose-300 text-xl">
                            Software Developer | Automation Engineer
                        </p>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img
                            src="/images/profile1.jpg"
                            alt="Rijushree Guha"
                            className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg"
                        />
                    </div>

                </div>
            </div>

            {/* About Intro Section */}
            <section id="about" className="px-4 max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-600">
                    I'm a developer who enjoys building clean and functional web applications. I have experience in React, Node.js, automation testing, and more. I love solving problems and learning new technologies.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-4 max-w-4xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-2">Project One</h3>
                        <p className="text-gray-600">A brief description of the project, technologies used, and the main features it offers.</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-2">Project Two</h3>
                        <p className="text-gray-600">A brief description of the project, technologies used, and the main features it offers.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
