import { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';

const CTA = () => {
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
        <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Denial Management?</h2>
                    <p className="text-xl max-w-3xl mx-auto opacity-90 text-white">
                        Join hundreds of healthcare providers who have improved their revenue recovery with Revado.
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                    }`}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Schedule a Demo</h3>
                            <p className="mb-6 opacity-90 text-white">
                                See how Revado can help your organization maximize revenue recovery and streamline denial management.
                            </p>
                            <button className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg font-medium group">
                                Get Started
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Contact Sales</h3>
                            <p className="mb-6 opacity-90 text-white">
                                Have questions? Our team is ready to help you find the right solution for your needs.
                            </p>
                            <button className="flex items-center border-2 border-white bg-transparent text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium group">
                                <FiMessageSquare className="mr-2" />
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <p className="text-lg opacity-90 text-white">
                        No long-term contracts. 30-day money-back guarantee.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA; 