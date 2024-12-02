/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Sora", "sans-serif"], // Add Sora as the default sans-serif font
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
}