import { FC, JSX } from "react";

// UI
// Ya no importamos Divider ni CardFooter porque los eliminamos visualmente
import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody } from "@heroui/card";

interface OptionCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    footerJsx: JSX.Element;
}

const OptionCard: FC<OptionCardProps> = ({
    title,
    description,
    image,
    footerJsx,
}) => {
    return (
        <Card 
            className="relative w-full h-full gap-0 bg-white/70 dark:bg-[#000000]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg rounded-[24px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(255,85,0,0.15)] hover:border-[#ff5500]/50 group overflow-hidden"
        >
            {/* TRUCO MAESTRO: Estiramos el botón original sobre toda la tarjeta y lo hacemos invisible.
                La opacidad 0 lo esconde, pero sigue recibiendo los clics perfectamente. */}
            <div className="absolute inset-0 z-20 cursor-pointer opacity-0 [&_button]:absolute [&_button]:inset-0 [&_button]:w-full [&_button]:h-full [&_button]:p-0">
                {footerJsx}
            </div>

            {/* HEADER - Ajustamos el tamaño del título a text-base */}
            <CardHeader className="flex-col items-start px-5 pt-4 pb-0 z-10 pointer-events-none">
                <h4 className="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-2 tracking-tight">
                    <span className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500]"></span>
                    {title}
                </h4>
                {/* line-clamp-2 evita que la tarjeta crezca si la descripción es muy larga */}
                <small className="text-gray-500 dark:text-gray-400 mt-1 leading-snug line-clamp-2">
                    {description}
                </small>
            </CardHeader>
            
            {/* BODY - Imagen */}
            <CardBody className="flex justify-center items-center py-3 px-5 z-10 pointer-events-none mb-1">
                {/* Redujimos la altura fija a h-32 (128px) para que sean menos altas y más rectangulares */}
                <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-inner border border-gray-100 dark:border-[#1c1c1e] bg-gray-50 dark:bg-[#0a0a0a]">
                    <Image 
                        className="z-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                        alt={title} 
                        src={image} 
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default OptionCard;