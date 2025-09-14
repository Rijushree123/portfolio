const About = () => {
    return (
        <section id="about" className="px-4 max-w-4xl mx-auto py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg md:py-20">
            <h2 className="text-3xl font-bold text-pink-400 text-center mb-6 border-b-2 border-pink-500 pb-2">
                About Me
            </h2>

            {/* Profile Section */}
            <div className="mb-8 text-center">
                <h3 className="text-2xl font-semibold text-pink-300 mb-2">Profile</h3>
                <p className="text-pink-200 text-lg leading-relaxed px-4">
                    Experienced in frontend, backend, and automation script development. Aspiring full-stack developer. Passionate about building efficient, scalable, and high-quality software solutions.
                </p>
            </div>

            {/* Education Section */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-pink-300 mb-4">Education</h3>

                <div className="mb-6 px-4">
                    <h4 className="text-xl font-bold text-pink-200">University of Engineering & Management, Kolkata, India</h4>
                    <p className="text-gray-300">Bachelor of Engineering in Computer Science and Technology (CST), 2019 – 2023</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Among the top 5% of the batch</li>
                        <li>Scored 92%</li>
                    </ul>
                </div>

                <div className="mb-6 px-4">
                    <h4 className="text-xl font-bold text-pink-200">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                    <p className="text-gray-300">Higher Secondary - 12th ISC, 2019</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Scored 89%</li>
                    </ul>
                </div>

                <div className="mb-6 px-4">
                    <h4 className="text-xl font-bold text-pink-200">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                    <p className="text-gray-300">Secondary - 10th ISC, 2017</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Scored 90%</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;

{/* <section id="about" className="w-full bg-gray-900 text-pink-200 py-12 px-4 md:px-20 md:py-20">
    <div className="max-w-4xl mx-auto space-y-10">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink mb-6 border-b-2 border-pink-500 inline-block pb-2">
            About Me
        </h2>

        <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-pink-400">Profile</h3>
            <p className="text-gray-300 leading-relaxed">
                Experienced in frontend, backend, and automation script development. Aspiring full-stack developer.
                Passionate about building efficient, scalable, and high-quality software solutions.
            </p>
        </div>

        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-pink-400">Education</h3>

            <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-pink">University of Engineering & Management, Kolkata, India</h4>
                    <p className="text-gray-300 italic mb-2">Bachelor of Engineering in Computer Science and Technology (CST) | 2019 – 2023</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Among the top 5% of the batch</li>
                        <li>Scored 92%</li>
                    </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-pink">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                    <p className="text-gray-300 italic mb-2">Higher Secondary - 12th ISC | 2019</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Scored 89%</li>
                    </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-pink">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                    <p className="text-gray-300 italic mb-2">Secondary - 10th ISC | 2017</p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Scored 90%</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</section> */}