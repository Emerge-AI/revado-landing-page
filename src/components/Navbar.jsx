import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiZap } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'}`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            <div className="flex justify-center items-center mr-3 w-10 h-10 text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-md">
                                <FiZap size={20} className="transform rotate-12" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight leading-none text-gray-900">Revado</span>
                                <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">AI</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <a href="#features" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>Features</a>
                        <a href="#benefits" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>Benefits</a>
                        <a href="#testimonials" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>Testimonials</a>
                        <a href="#contact" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}>Contact</a>
                        <button className="px-5 py-2 ml-4 text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700">
                            Request Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                ? 'visible max-h-screen bg-white shadow-lg opacity-100'
                : 'invisible max-h-0 opacity-0'}`}>
                <div className="px-4 py-4 space-y-4">
                    <a href="#features" className="block font-medium text-gray-800 hover:text-blue-600">Features</a>
                    <a href="#benefits" className="block font-medium text-gray-800 hover:text-blue-600">Benefits</a>
                    <a href="#testimonials" className="block font-medium text-gray-800 hover:text-blue-600">Testimonials</a>
                    <a href="#contact" className="block font-medium text-gray-800 hover:text-blue-600">Contact</a>
                    <button className="px-5 py-2 w-full text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700">
                        Request Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;