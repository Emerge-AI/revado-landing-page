import { useState, useEffect } from 'react';
import { FiPlay, FiFileText, FiPhone, FiCalendar, FiSearch, FiUsers, FiX } from 'react-icons/fi';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('document');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Function to handle demo button click
    const handleDemoClick = () => {
        setShowModal(true);
        // Auto-hide modal after 5 seconds
        setTimeout(() => {
            setShowModal(false);
        }, 5000);
    };

    const enhancementTabs = {
        document: {
            title: "Document Enhancements",
            description: "Search for, format and include (with citations) Medical, Legal, and Payer documents inside of appeals to recover revenue.",
            icon: <FiFileText className="mr-2" />,
            features: [
                { icon: <FiSearch />, text: "Intelligent document search across medical databases" },
                { icon: <FiFileText />, text: "Automatic formatting with proper citations" },
                { icon: <FiFileText />, text: "Payer-specific document integration" }
            ]
        },
        social: {
            title: "Social Enhancements",
            description: "Make autonomous calls with our AI voice agent (Stella), schedule Peer-to-Peer meetings, and reach out to legal partners to escalate appeals.",
            icon: <FiPhone className="mr-2" />,
            features: [
                { icon: <FiPhone />, text: "AI voice agent (Stella) makes autonomous calls" },
                { icon: <FiCalendar />, text: "Automated Peer-to-Peer meeting scheduling" },
                { icon: <FiUsers />, text: "Legal partner outreach for appeal escalation" }
            ]
        }
    };

    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden w-full">
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        } z-10`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            <span className="text-blue-600 block mb-2">Revolutionize</span>
                            Healthcare Denial Management
                        </h1>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm mb-8">
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Revado helps healthcare providers efficiently manage insurance claim denials and appeals,
                                maximizing revenue recovery with AI-powered tools and intuitive workflows.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg font-medium">
                                Get Started
                            </button>
                            <button
                                onClick={handleDemoClick}
                                className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg font-medium group"
                            >
                                <span className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 mr-2 group-hover:bg-blue-200 transition-colors duration-300">
                                    <FiPlay />
                                </span>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        } md:z-10 -mt-16 md:mt-0`}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3 opacity-70"></div>
                            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform -rotate-3 opacity-70"></div>
                            <div className="relative bg-white p-4 rounded-xl shadow-2xl">
                                <img
                                    src="/images/dashboard.png"
                                    alt="Revado Dashboard"
                                    className="rounded-lg w-full shadow-inner"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/800x500?text=Revado+Dashboard';
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                                <span className="text-sm font-bold">AI-Powered</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhancement Showcase */}
                <div className={`bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Core Innovations</h2>

                    {/* Mobile-optimized tabs */}
                    <div className="flex w-full border-b border-gray-200 mb-6 overflow-hidden">
                        <div className="flex w-full justify-center">
                            {Object.keys(enhancementTabs).map((tab) => (
                                <button
                                    key={tab}
                                    className={`flex items-center px-3 sm:px-6 py-3 font-medium text-base sm:text-lg transition-colors duration-300 ${activeTab === tab
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-blue-600'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {enhancementTabs[tab].icon}
                                    <span>{tab === 'document' ? 'Document' : 'Social'}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{enhancementTabs[activeTab].title}</h3>
                            <p className="text-gray-700 mb-6 text-base sm:text-lg">{enhancementTabs[activeTab].description}</p>

                            <div className="space-y-4">
                                {enhancementTabs[activeTab].features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <p className="ml-4 text-gray-700 text-sm sm:text-base">{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-6 md:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-10 transform rotate-2"></div>
                            <div className="relative bg-white p-4 sm:p-6 rounded-lg border border-blue-100 shadow-lg">
                                {activeTab === 'document' ? (
                                    <div className="space-y-4">
                                        {/* Document items - Mobile optimized */}
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiFileText className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">Medical Document</span>
                                            </div>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Included</span>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiFileText className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">Legal Precedent</span>
                                            </div>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Cited</span>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiFileText className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">Payer Policy</span>
                                            </div>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Referenced</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Social items - Mobile optimized */}
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiPhone className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">Stella AI Call</span>
                                            </div>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Completed</span>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiCalendar className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">P2P Meeting</span>
                                            </div>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Scheduled</span>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between bg-blue-50 p-3 rounded-lg">
                                            <div className="flex items-center mr-2">
                                                <FiUsers className="text-blue-600 mr-2 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base">Legal Escalation</span>
                                            </div>
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mt-1 sm:mt-0">In Progress</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 transform transition-transform duration-300 hover:-translate-y-2">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">30%</h3>
                        <p className="text-gray-700">Increase in successful appeals</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 transform transition-transform duration-300 hover:-translate-y-2">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">50%</h3>
                        <p className="text-gray-700">Reduction in processing time</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 transform transition-transform duration-300 hover:-translate-y-2">
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">3x</h3>
                        <p className="text-gray-700">More denials handled per staff</p>
                    </div>
                </div>
            </div>

            {/* Coming Soon Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 relative z-10 transform transition-all duration-300 animate-bounce-once">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FiX size={24} />
                        </button>

                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
                                <div className="relative flex items-center justify-center w-full h-full bg-blue-500 rounded-full text-white">
                                    <FiPlay size={36} className="animate-pulse" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Our Demo is Taking a Coffee Break</h3>
                            <p className="text-gray-600 mb-6">
                                Our amazing demo is still getting its makeup done. We're adding extra pizzazz to make sure it knocks your socks off!
                            </p>

                            <div className="flex justify-center space-x-2 mb-4">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-3 h-3 rounded-full bg-blue-600"
                                        style={{
                                            animation: `bounce 1.4s infinite ease-in-out both`,
                                            animationDelay: `${i * 0.16}s`
                                        }}
                                    ></div>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                            >
                                I'll Check Back Later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero; 