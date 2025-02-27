import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Innovations from './components/Innovations'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow w-full">
                        <Hero />
                        <Features />
                        <Innovations />
                        <Benefits />
                        <Testimonials />
                        <CTA />
                    </main>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default App 