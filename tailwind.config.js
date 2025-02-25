/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065',
                },
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
            animation: {
                'bounce-once': 'bounce 0.6s ease-in-out 2',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                'bounce': 'bounce 1s infinite',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
                ping: {
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0',
                    },
                },
                pulse: {
                    '50%': {
                        opacity: '.5',
                    },
                },
            },
        },
    },
    safelist: [
        'bg-blue-50', 'bg-blue-100', 'bg-blue-600', 'bg-blue-700', 'bg-white', 'bg-gray-50', 'bg-gray-800',
        'text-blue-600', 'text-blue-800', 'text-white', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
        'hover:bg-blue-50', 'hover:bg-blue-700', 'hover:text-blue-600', 'hover:text-white',
        'border-blue-600', 'border-white', 'border-gray-700',
        'rounded-lg', 'rounded-xl', 'rounded-full',
        'shadow-md', 'shadow-lg', 'shadow-xl',
        'flex', 'flex-col', 'flex-row', 'items-center', 'justify-center', 'justify-between',
        'space-x-4', 'space-x-6', 'space-y-0', 'space-y-2', 'space-y-4',
        'grid', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'lg:grid-cols-3',
        'gap-8', 'gap-12',
        'container', 'mx-auto', 'px-4', 'py-2', 'py-3', 'py-8', 'py-12', 'py-16',
        'mb-0', 'mb-2', 'mb-4', 'mb-6', 'mb-8', 'mb-10', 'mb-12',
        'mt-0', 'mt-4', 'mt-8',
        'ml-11',
        'mr-3', 'mr-4',
        'w-full', 'w-8', 'w-12', 'md:w-1/2',
        'h-8', 'h-12',
        'min-h-screen',
        'text-center', 'text-lg', 'text-xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-sm',
        'font-bold', 'font-semibold',
        'italic',
        'hidden', 'md:flex', 'sm:flex-row',
        'md:mb-0', 'sm:space-y-0', 'sm:space-x-4', 'md:mt-0',
        'md:flex-row', 'sm:flex-row',
        'max-w-2xl',
        'from-blue-50', 'to-white', 'bg-gradient-to-b',
        'animate-bounce-once', 'animate-pulse', 'animate-ping', 'animate-bounce',
        'backdrop-blur-sm', 'z-50', 'z-10', 'fixed', 'inset-0', 'relative', 'absolute'
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
} 