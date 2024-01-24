/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0D3756",
                secondary: "#FFFFFF",
                teriary: "#4B4B4B",
            },
        },
    },
    plugins: ["@tailwindcss/forms"],
};
