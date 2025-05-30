import { useState, useEffect, useRef } from 'react';
import { FiFileText, FiPhone, FiSearch, FiCalendar, FiUsers, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const Innovations = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section id="innovations" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-x-hidden w-full">
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">REVOLUTIONARY APPROACH</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Innovations</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Revado's unique approach combines document and social enhancements to revolutionize healthcare denial management.
                    </p>
                </div>

                {/* Document Enhancements */}
                <div className={`mb-20 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="lg:w-1/2 p-6 lg:p-12">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
                                    <FiFileText size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Document Enhancements</h3>
                            </div>

                            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
                                Search for, format and include (with citations) Medical, Legal, and Payer documents inside of appeals to recover revenue.
                            </p>

                            <div className="space-y-4 mb-6 sm:mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <FiSearch size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Intelligent Document Search</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Automatically search and retrieve relevant medical documentation from multiple databases.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <FiFileText size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Proper Citations</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Format documents with proper citations to strengthen appeals and increase success rates.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <FiCheckCircle size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Payer-Specific Integration</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Tailor documentation to specific payer requirements, increasing the likelihood of approval.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="flex items-center text-blue-600 font-medium text-sm sm:text-base group">
                                Learn more about Document Enhancements
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        <div className="lg:w-1/2 bg-blue-50 p-6 lg:p-12">
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-blue-100">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center text-sm sm:text-base">
                                    <FiFileText className="text-blue-600 mr-2 flex-shrink-0" />
                                    Document Enhancement Example
                                </h4>

                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">Medical Necessity Document</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Found & Included</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Automatically retrieved from patient records and formatted with proper citations.</p>
                                    </div>

                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">Legal Precedent</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Cited</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Referenced similar cases where appeals were successful, strengthening the argument.</p>
                                    </div>

                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">Payer Policy Reference</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Included</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Specific sections of payer policy that support the appeal are automatically highlighted.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Enhancements */}
                <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex flex-col lg:flex-row-reverse items-center bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="lg:w-1/2 p-6 lg:p-12">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3 sm:mr-4 flex-shrink-0">
                                    <FiPhone size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Social Enhancements</h3>
                            </div>

                            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
                                Make autonomous calls with our AI voice agent (Stella), schedule Peer-to-Peer meetings, and reach out to legal partners to escalate appeals.
                            </p>

                            <div className="space-y-4 mb-6 sm:mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                            <FiPhone size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">AI Voice Agent (Stella)</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Autonomous calls to the right people, saving time and accelerating the appeals process.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                            <FiCalendar size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Peer-to-Peer Scheduling</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Automatically schedule meetings to convey medical information quickly and efficiently.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                            <FiUsers size={16} />
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Legal Partner Outreach</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">Escalate appeals through automated communication with legal partners via voice and email.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="flex items-center text-purple-600 font-medium text-sm sm:text-base group">
                                Learn more about Social Enhancements
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        <div className="lg:w-1/2 bg-purple-50 p-6 lg:p-12">
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-purple-100">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center text-sm sm:text-base">
                                    <FiPhone className="text-purple-600 mr-2 flex-shrink-0" />
                                    Social Enhancement Example
                                </h4>

                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">Stella AI Call</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Completed</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Stella successfully contacted the payer representative and initiated the appeal process.</p>
                                    </div>

                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">P2P Meeting</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1 sm:mt-0">Scheduled</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Automatically scheduled a meeting between the physician and medical director for case review.</p>
                                    </div>

                                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                                        <div className="flex flex-wrap justify-between items-center mb-2">
                                            <span className="font-medium text-gray-700 text-xs sm:text-sm mr-2">Legal Escalation</span>
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mt-1 sm:mt-0">In Progress</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Initiated contact with legal partners to prepare for potential escalation if needed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className={`mt-20 text-center transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h3 className="text-2xl font-bold mb-8">The Combined Power of Our Innovations</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">30%</div>
                            <p className="text-gray-700 text-sm md:text-base">Increase in successful appeals with our document enhancements</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">40%</div>
                            <p className="text-gray-700 text-sm md:text-base">Reduction in appeal processing time with our social enhancements</p>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">3x</div>
                            <p className="text-gray-700 text-sm md:text-base">Revenue recovery when both enhancements are used together</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovations; 