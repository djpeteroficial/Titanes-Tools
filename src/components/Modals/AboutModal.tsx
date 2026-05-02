import { FC } from "react";

// UI
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/modal";

// Tu nueva imagen de información
// Asegúrate de que el nombre y la extensión coincidan con tu archivo real
import imgAcercaDe from "@/static/img/info_acerca_de.webp";

interface AboutModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

const AboutModal: FC<AboutModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Modal
            size="3xl" // Cambié a "lg" (large) para que la imagen tenga buen espacio
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={() => onOpenChange()}
            shouldBlockScroll={false}
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-[#ff5500] font-bold">
                            Acerca de Titanes Tools
                        </ModalHeader>
                        
                        <ModalBody className="flex items-center justify-center p-4 mb-4">
                            {/* AQUÍ SE MUESTRA TU IMAGEN */}
                            <img 
                                src={imgAcercaDe} 
                                alt="Información Titanes Tools" 
                                className="max-w-full h-auto rounded-lg shadow-lg border-2 border-[#ff5500]" 
                            />
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AboutModal;