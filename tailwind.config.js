import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#f4f4f5', // text-zinc-100
                        a: {
                            color: '#3b82f6', // text-blue-500
                            '&:hover': {
                                color: '#2563eb', // text-blue-600
                            },
                        },
                        h1: {
                            color: '#fafafa', // text-zinc-50
                            fontSize: '2rem',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                        },
                        h2: {
                            color: '#fafafa', // text-zinc-50
                            fontSize: '1.5rem',
                            marginTop: '1.75rem',
                            marginBottom: '0.75rem',
                        },
                        h3: {
                            color: '#fafafa', // text-zinc-50
                            fontSize: '1.25rem',
                            marginTop: '1.5rem',
                            marginBottom: '0.75rem',
                        },
                        strong: {
                            color: '#fafafa', // text-zinc-50
                        },
                        code: {
                            color: '#fafafa', // text-zinc-50
                            backgroundColor: '#27272a', // bg-zinc-800
                            borderRadius: '0.25rem',
                            padding: '0.125rem 0.25rem',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                        pre: {
                            backgroundColor: '#18181b', // bg-zinc-900
                            color: '#fafafa', // text-zinc-50
                            padding: '1rem',
                            borderRadius: '0.375rem',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                        },
                        blockquote: {
                            color: '#a1a1aa', // text-zinc-400
                            borderLeftColor: '#3f3f46', // border-zinc-700
                        },
                        ul: {
                            listStyleType: 'disc',
                            marginTop: '0.75rem',
                            marginBottom: '0.75rem',
                            paddingLeft: '1.625rem',
                        },
                        ol: {
                            listStyleType: 'decimal',
                            marginTop: '0.75rem',
                            marginBottom: '0.75rem',
                            paddingLeft: '1.625rem',
                        },
                        li: {
                            marginTop: '0.375rem',
                            marginBottom: '0.375rem',
                        },
                    },
                },
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
};
