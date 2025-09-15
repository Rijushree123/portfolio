const About = () => {
    return (
        <section id="about" className="px-4 w-full mx-auto py-12 bg-gradient-to-r bg-white rounded-lg shadow-lg md:py-20">
            <h2 className="text-3xl font-bold text-pink-400 text-center mb-8 border-b-2 border-pink-500 pb-2">
                About Me
            </h2>

            {/* Profile Section */}
            <div className="mb-12 text-center">
                <p className="text-pink-600 text-lg leading-relaxed max-w-2xl mx-auto px-4">
                    Experienced in frontend, backend, and automation script development. Aspiring full-stack developer. Passionate about building efficient, scalable, and high-quality software solutions.
                </p>
            </div>

            {/* Education Section */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-pink-300 mb-6">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    
                    {/* University Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h4 className="text-xl font-bold text-pink-500 mb-2">University of Engineering & Management, Kolkata, India</h4>
                        <p className="text-gray-600 italic mb-3">Bachelor of Engineering in Computer Science and Technology (CST) | 2019 – 2023</p>
                        <ul className="list-disc list-inside text-gray-500 text-left">
                            <li>Among the top 5% of the batch</li>
                            <li>Scored 92%</li>
                        </ul>
                    </div>

                    {/* Higher Secondary Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h4 className="text-xl font-bold text-pink-500 mb-2">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                        <p className="text-gray-600 italic mb-3">Higher Secondary - 12th ISC | 2019</p>
                        <ul className="list-disc list-inside text-gray-500 text-left">
                            <li>Scored 89%</li>
                        </ul>
                    </div>

                    {/* Secondary Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h4 className="text-xl font-bold text-pink-500 mb-2">St. Stephen’s School, Dum Dum, Kolkata, India</h4>
                        <p className="text-gray-600 italic mb-3">Secondary - 10th ISC | 2017</p>
                        <ul className="list-disc list-inside text-gray-500 text-left">
                            <li>Scored 90%</li>
                        </ul>
                    </div>

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