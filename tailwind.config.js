const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/components/(alert|avatar|button|card|checkbox|chip|divider|dropdown|image|input|modal|progress|radio|select|skeleton|slider|spinner|toggle|tabs|ripple|form|menu|popover|listbox|scroll-shadow).js",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                dark: {
                    colors: {
                        background: "#000000", // Negro total
                        primary: {
                            DEFAULT: "#ff5500", // Naranja Titanes
                            foreground: "#ffffff",
                        },
                        focus: "#ff5500",
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#ff5500",
                            foreground: "#ffffff",
                        },
                        focus: "#ff5500",
                    },
                },
            },
        }),
    ],
};