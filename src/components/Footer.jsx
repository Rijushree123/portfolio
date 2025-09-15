const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 px-4 mt-12 rounded-t-lg shadow-inner">
            <div className="max-w-4xl mx-auto text-center space-y-4">

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
                    <a href="tel:+916289351648" className="hover:text-pink-500 transition-colors">📱 +91-6289351648</a>
                    <a href="mailto:rijushree.guha.uemk.cst.2023@gmail.com" className="hover:text-pink-500 transition-colors">📧 rijushree.guha.uemk.cst.2023@gmail.com</a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center space-x-6 text-lg">
                    <a href="https://github.com/Rijushree123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://linkedin.com/in/rijushree-guha" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Rijushree Guha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
