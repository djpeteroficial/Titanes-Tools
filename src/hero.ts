// hero.ts
import { heroui } from "@heroui/theme";

export default heroui({
    themes: {
        dark: {
            colors: {
                background: "#000000", // Tu negro profundo para el fondo
                primary: {
                    DEFAULT: "#ff5500", // El naranja agresivo de Titanes
                    foreground: "#ffffff", // Letras blancas para que resalten
                },
                focus: "#ff5500", // El contorno naranja al hacer clic
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
});