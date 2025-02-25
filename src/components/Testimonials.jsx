import { useState, useEffect, useRef } from 'react';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ name, role, company, quote, initials, delay }) => {
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
            className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-700 transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{initials}</span>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-500">{role}, {company}</p>
                </div>
            </div>
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-gray-600 italic leading-relaxed">"{quote}"</p>
        </div>
    );
};

const Testimonials = () => {
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

    const testimonials = [
        {
            name: "Jane Mitchell",
            role: "Revenue Cycle Director",
            company: "Memorial Health",
            initials: "JM",
            quote: "Revado has transformed our denial management process. We've seen a 25% increase in successful appeals and reduced our processing time significantly."
        },
        {
            name: "Robert Kim",
            role: "CFO",
            company: "Westside Medical Group",
            initials: "RK",
            quote: "The ROI with Revado has been exceptional. Within 6 months, we recovered an additional $1.2M in previously denied claims."
        },
        {
            name: "Sarah Patel",
            role: "Appeals Manager",
            company: "Northside Hospital",
            initials: "SP",
            quote: "The AI-enhanced appeal tools have been a game-changer. My team can now focus on complex cases while Revado handles routine appeals automatically."
        }
    ];

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trusted by leading healthcare providers across the country.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            company={testimonial.company}
                            quote={testimonial.quote}
                            initials={testimonial.initials}
                            delay={index * 100}
                        />
                    ))}
                </div>

                <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-flex items-center space-x-4 bg-white px-6 py-3 rounded-full shadow-md">
                        <span className="text-gray-600 font-medium">Trusted by</span>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <span className="text-blue-600 font-bold">200+ Healthcare Organizations</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 