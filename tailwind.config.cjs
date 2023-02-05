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
                '120': '30rem',
                '18': '4.5rem',
            },
            scale: {
                '200': '2',
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
