import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiZap } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 w-full text-white bg-gray-900">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <a href="#" className="flex items-center mb-4">
                                <div className="flex justify-center items-center mr-3 w-10 h-10 text-white bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg shadow-md">
                                    <FiZap size={20} className="transform rotate-12" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold tracking-tight leading-none text-white">Revado</span>
                                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">AI</span>
                                </div>
                            </a>
                            <p className="leading-relaxed text-gray-400">
                                Revolutionizing healthcare denial management with AI-powered solutions that maximize revenue recovery and streamline workflows.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                <FiTwitter />
                            </a>
                            <a href="#" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                <FiLinkedin />
                            </a>
                            <a href="#" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                <FiFacebook />
                            </a>
                            <a href="#" className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-bold">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-gray-400 transition-colors duration-300 hover:text-white">Features</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Case Studies</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Resources</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-bold">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Blog</a></li>
                            <li><a href="#contact" className="text-gray-400 transition-colors duration-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-bold">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-white">HIPAA Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center pt-8 border-t border-gray-800 md:flex-row">
                    <p className="mb-4 text-gray-500 md:mb-0">© {currentYear} Revado AI. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#" className="text-sm text-gray-500 transition-colors duration-300 hover:text-white">Privacy</a>
                        <a href="#" className="text-sm text-gray-500 transition-colors duration-300 hover:text-white">Terms</a>
                        <a href="#" className="text-sm text-gray-500 transition-colors duration-300 hover:text-white">Cookies</a>
                        <a href="#" className="text-sm text-gray-500 transition-colors duration-300 hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 