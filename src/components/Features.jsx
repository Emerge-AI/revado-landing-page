import { useState, useEffect, useRef } from 'react';
import { FiBarChart2, FiFileText, FiCpu, FiCheckCircle, FiSliders, FiPieChart, FiPhone, FiUsers } from 'react-icons/fi';

const FeatureCard = ({ icon, title, description, delay, isHighlighted = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-700 transform ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
                } ${isHighlighted ? 'border-2 border-blue-500 relative' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {isHighlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                    Core Innovation
                </div>
            )}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${isHighlighted ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
        </div>
    );
};

const Features = () => {
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

    const features = [
        {
            icon: <FiBarChart2 size={24} />,
            title: "Comprehensive Dashboard",
            description: "Interactive metrics dashboard with KPIs, visual data representation, and customizable views for complete denial oversight."
        },
        {
            icon: <FiFileText size={24} />,
            title: "Document Enhancements",
            description: "Search for, format and include (with citations) Medical, Legal, and Payer documents inside of appeals to recover revenue.",
            isHighlighted: true
        },
        {
            icon: <FiCpu size={24} />,
            title: "AI Enhancement",
            description: "AI-powered appeal enhancement tools with automated document retrieval and processing for faster resolution."
        },
        {
            icon: <FiPhone size={24} />,
            title: "Social Enhancements",
            description: "Make autonomous calls with our AI voice agent (Stella), schedule Peer-to-Peer meetings, and reach out to legal partners to escalate appeals.",
            isHighlighted: true
        },
        {
            icon: <FiSliders size={24} />,
            title: "Customizable Workflows",
            description: "Tailor the system to your organization's specific needs with customizable workflows and automation rules."
        },
        {
            icon: <FiPieChart size={24} />,
            title: "Detailed Analytics",
            description: "Gain insights into denial patterns and financial impact with comprehensive analytics and reporting tools."
        }
    ];

    return (
        <section id="features" ref={sectionRef} className="py-20 bg-gray-50 overflow-x-hidden w-full">
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive suite of tools helps you streamline denial management and maximize revenue recovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 100}
                            isHighlighted={feature.isHighlighted}
                        />
                    ))}
                </div>

                <div className={`mt-12 sm:mt-16 bg-blue-600 text-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Revolutionizing Appeal Success Rates</h3>
                            <p className="text-base sm:text-lg opacity-90 mb-4 text-white">
                                Our Document and Social Enhancements work together to create a powerful system that dramatically increases appeal success rates.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <FiCheckCircle className="mr-2 text-white flex-shrink-0" />
                                    <span className="text-white text-sm sm:text-base">30% higher success rate</span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="mr-2 text-white flex-shrink-0" />
                                    <span className="text-white text-sm sm:text-base">50% faster processing</span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="mr-2 text-white flex-shrink-0" />
                                    <span className="text-white text-sm sm:text-base">Automated document search</span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="mr-2 text-white flex-shrink-0" />
                                    <span className="text-white text-sm sm:text-base">AI-powered outreach</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full flex items-center justify-center">
                                <FiUsers size={36} className="sm:text-6xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 