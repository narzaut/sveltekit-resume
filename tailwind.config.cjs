/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-4deg)'
                    },
                    '50%': {
                        transform: 'rotate(4deg)'
                    },
                }
            },
            animation: {
                wiggle: 'wiggle 2s ease-in-out infinite',
            },
            height: {
                '18': '4.5rem',
                '120': '30rem',
                '150': '37.5rem',
                '175': '43.75rem',
                '200': '50rem'
            },
            scale: {
                '200': '2',
                '225': '2.25',
                '250': '2.5',
                '65': '.65',
            },
            width: {
                '1/7': '14.2857143%'
            },

            textColor: {
                'gray-light': "#ccd6f6"
            }
        },
    },
    plugins: [require('tailwind-scrollbar'),],
}
