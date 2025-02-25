import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiZap, FiBriefcase } from 'react-icons/fi';

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg shadow-md mr-3">
                                <FiZap size={20} className="transform rotate-12" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">Revado</span>
                                <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">AI</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                            }`}>Features</a>
                        <a href="#benefits" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                            }`}>Benefits</a>
                        <a href="#testimonials" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                            }`}>Testimonials</a>
                        <a href="#contact" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                            }`}>Contact</a>
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-4">
                            Request Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-gray-800'
                                }`}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                ? 'max-h-screen opacity-100 visible bg-white shadow-lg'
                : 'max-h-0 opacity-0 invisible'
                }`}>
                <div className="container mx-auto px-4 py-4 space-y-4">
                    <a
                        href="#features"
                        className="block text-gray-800 hover:text-blue-600 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#benefits"
                        className="block text-gray-800 hover:text-blue-600 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Benefits
                    </a>
                    <a
                        href="#testimonials"
                        className="block text-gray-800 hover:text-blue-600 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Testimonials
                    </a>
                    <a
                        href="#contact"
                        className="block text-gray-800 hover:text-blue-600 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                    <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Request Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 