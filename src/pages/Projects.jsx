const Projects = () => {
    const projects = [
        {
            title: "Full-Stack To-Do Management App",
            date: "01/2025 - 04/2025",
            technologies: "Spring Boot, React.js, MySQL",
            details: [
                "Developed a task management system with authentication and role-based authorization.",
                "Implemented RESTful APIs, optimizing data retrieval time by 25%."
            ]
        },
        {
            title: "Restaurant Website",
            date: "07/2022 - 09/2021",
            technologies: "HTML, CSS, JavaScript, Bootstrap",
            details: [
                "Simple frontend website with responsive layout and interactive UI."
            ]
        }
    ];

    return (
        <section id="projects" className="px-4 max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-pink-400 text-center mb-8 border-b-2 border-pink-500 pb-2">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-pink-300 mb-3">Full-Stack To-Do Management App</h3>
                    <p className="text-gray-300 text-sm mb-2">01/2025 - 04/2025</p>
                    <p className="text-pink-300 text-sm font-medium mb-3">Technologies: Spring Boot, React.js, MySQL</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Developed a task management system with authentication and role-based authorization.</li>
                        <li>Implemented RESTful APIs, optimizing data retrieval time by 25%.</li>
                    </ul>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-pink-300 mb-3">Restaurant Website</h3>
                    <p className="text-gray-300 text-sm mb-2">07/2022 - 09/2022</p>
                    <p className="text-pink-300 text-sm font-medium mb-3">Technologies: HTML, CSS, JavaScript, Bootstrap</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Created a simple, responsive website showcasing restaurant services.</li>
                        <li>Enhanced user experience with smooth navigation and interactive UI components.</li>
                    </ul>
                </div>
            </div>
        </section>


    );
};

export default Projects;
