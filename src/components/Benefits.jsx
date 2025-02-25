import { useState, useEffect, useRef } from 'react';
import { FiCheckCircle, FiClock, FiUsers, FiShield } from 'react-icons/fi';

const BenefitItem = ({ icon, title, description, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

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

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`mb-8 transition-all duration-700 transform ${isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        {icon}
                    </div>
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Benefits = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

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

    const benefits = [
        {
            icon: <FiCheckCircle size={20} />,
            title: "Increase Revenue Recovery",
            description: "Improve your denial appeal success rate by up to 30% with our AI-enhanced appeal tools."
        },
        {
            icon: <FiClock size={20} />,
            title: "Reduce Processing Time",
            description: "Cut denial processing time by 50% with automated workflows and intelligent document handling."
        },
        {
            icon: <FiUsers size={20} />,
            title: "Improve Staff Efficiency",
            description: "Enable your team to handle 3x more denials with the same resources through streamlined workflows."
        },
        {
            icon: <FiShield size={20} />,
            title: "Ensure Compliance",
            description: "Stay compliant with regulatory requirements with built-in compliance checks and documentation."
        }
    ];

    return (
        <section id="benefits" ref={sectionRef} className="py-20">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Revado</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our platform delivers measurable results that impact your bottom line.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center">
                    <div
                        ref={imageRef}
                        className={`lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform -rotate-2 opacity-70"></div>
                            <div className="relative bg-white p-6 rounded-xl shadow-xl">
                                <img
                                    src="/images/benefits-illustration.png"
                                    alt="Revado Benefits"
                                    className="rounded-lg w-full"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/600x400?text=Revado+Benefits';
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                    <span className="text-sm font-bold">ROI Focused</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 lg:pl-16">
                        {benefits.map((benefit, index) => (
                            <BenefitItem
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits; 