import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1 className="text-xl font-bold text-center mt-10">Hi, I’m Rijushree</h1>
                <p>A passionate Frontend Developer</p>
            </header>
            <section>
                <p>I build user-friendly web applications using React, JavaScript, and modern tools.</p>
                <div className="buttons">
                    <a href="/projects">View Projects</a>
                    <a href="/contact">Contact Me</a>
                </div>
            </section>
            <footer>
                <p>Connect with me on <a href="https://linkedin.com/in/rijushree-guha">LinkedIn</a></p>
            </footer>
        </div>
    );
};

export default Home;
