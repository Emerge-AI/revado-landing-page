import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiZap } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-16 w-full">
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <a href="#" className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-lg shadow-md mr-3">
                                    <FiZap size={20} className="transform rotate-12" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold tracking-tight text-white leading-none">Revado</span>
                                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">AI</span>
                                </div>
                            </a>
                            <p className="text-gray-400 leading-relaxed">
                                Revolutionizing healthcare denial management with AI-powered solutions that maximize revenue recovery and streamline workflows.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <FiTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <FiLinkedin />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <FiFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Resources</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">HIPAA Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 mb-4 md:mb-0">© {currentYear} Revado AI. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Terms</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Cookies</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 