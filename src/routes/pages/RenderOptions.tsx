import { JSX, useState, useContext } from "react";

// UI
import { useDisclosure } from "@heroui/use-disclosure";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import TrailersOptions from "@/routes/pages/TrailersOptions/TrailersOptions";
import TrucksOptions from "@/routes/pages/TrucksOptions/TrucksOptions";
import ProfilesOptions from "@/routes/pages/ProfilesOptions/ProfilesOptions";
import AboutModal from "@/components/Modals/AboutModal";
import SettingsModal from "@/components/Modals/SettingsModal";

// Hooks
import { LocaleContext } from "@/hooks/useLocaleContext";
import { DarkModeContex } from "@/hooks/useDarkModeContex";

// Utils
import classNames from "classnames";

// Icons
import {
    IconTruck,
    IconUserCircle,
    IconSettings,
    IconPackages,
    IconPaw,
    IconSteeringWheel,
} from "@tabler/icons-react";

type ItemId = "trailer" | "truck" | "profile" | "settings" | "about";

interface ItemsTypes {
    id: ItemId;
    label: string;
    jsx: JSX.Element;
    modal: boolean;
    icon: JSX.Element;
}

const RenderOptions = () => {
    const { translations } = useContext(LocaleContext);
    const { darkMode } = useContext(DarkModeContex);
    const [activeIndex, setActiveIndex] = useState<ItemId>("trailer");
    const { trailers, trucks, profile, settings, about } = translations.menu_options;

    const {
        isOpen: isOpenAbout,
        onOpen: onOpenAbout,
        onOpenChange: onOpenChangeAbout,
    } = useDisclosure();

    const {
        isOpen: isOpenSettings,
        onOpen: onOpenSettings,
        onOpenChange: onOpenChangeSettings,
    } = useDisclosure();

    const items: ItemsTypes[] = [
        {
            id: "trailer",
            label: trailers.tab_title,
            jsx: <TrailersOptions />,
            modal: false,
            icon: <IconPackages size={20} />,
        },
        {
            id: "truck",
            label: trucks.tab_title,
            jsx: <TrucksOptions />,
            modal: false,
            icon: <IconTruck size={20} />,
        },
        {
            id: "profile",
            label: profile.tab_title,
            jsx: <ProfilesOptions />,
            modal: false,
            icon: <IconUserCircle size={20} />,
        },
        {
            id: "settings",
            label: settings.tab_title,
            jsx: <></>,
            modal: true,
            icon: <IconSettings size={20} />,
        },
        {
            id: "about",
            label: about.tab_title,
            jsx: <></>,
            modal: true,
            icon: <IconPaw size={20} />,
        },
    ];

    const setActiveIndexOptions = (index: ItemId) => {
        setActiveIndex(index);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const renderCart = (
        id: string,
        name: string,
        icon: JSX.Element,
        disable: boolean
    ): JSX.Element => {
        return (
            <Tab
                title={
                    <div className="flex items-center space-x-2">
                        {icon}
                        <span className="font-medium tracking-wide">
                            {name}
                        </span>
                    </div>
                }
                key={id}
                isDisabled={disable}
            />
        );
    };

    return (
        <>
            <AboutModal isOpen={isOpenAbout} onOpenChange={onOpenChangeAbout} />
            <SettingsModal
                isOpen={isOpenSettings}
                onOpenChange={onOpenChangeSettings}
            />
            
            <div className="mt-28 mb-28 flex flex-col items-center p-5">
                
                {/* BARRA ESTILO IOS (Glassmorphism) */}
                <div 
                    className={classNames(
                        "fixed top-4 z-30 flex items-center justify-between gap-4 sm:gap-6",
                        "px-4 py-3 rounded-full shadow-lg backdrop-blur-2xl border transition-colors duration-300",
                        darkMode 
                            ? "bg-[#000000]/70 border-white/10 shadow-black/50" 
                            : "bg-white/70 border-black/5 shadow-gray-200"
                    )}
                >
                    {/* LOGO */}
                    <Image
                        className="cursor-pointer transition duration-300 ease-out hover:scale-110 drop-shadow-md ml-1"
                        alt="Titanes Tools Logo"
                        width={45}
                        src="/tauri.png"
                    />

                    {/* PESTAÑAS (TABS) TIPO PIÍLDORA */}
                    <Tabs
                        onSelectionChange={(index) => {
                            if (index === "about") onOpenAbout();
                            else if (index === "settings") onOpenSettings();
                            else setActiveIndexOptions(index as ItemId);
                        }}
                        selectedKey={activeIndex}
                        size="md"
                        radius="full"
                        aria-label="Menú de navegación"
                        classNames={{
                            tabList: darkMode ? "bg-[#1c1c1e]/80" : "bg-gray-200/50",
                            cursor: "bg-[#ff5500] shadow-md",
                            tabContent: "group-data-[selected=true]:text-white text-gray-500 transition-colors"
                        }}
                    >
                        {items.map((item) => {
                            return renderCart(item.id, item.label, item.icon, false);
                        })}
                    </Tabs>

                    {/* BOTÓN ENLACE A TITANES WORLD TRUCKS */}
                    <Button
                        as="a"
                        href="https://titanesworldtrucks.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white shadow-md bg-[#ff5500] hover:bg-[#e64d00] transition-all"
                        radius="full"
                        size="sm"
                        startContent={<IconSteeringWheel size={18} />}
                    >
                        Titanes
                    </Button>
                </div>

                {/* CONTENEDOR DE TARJETAS */}
                <div className="w-full max-w-[90%] md:max-w-7xl animate-appearance-in">
                    {items.map((item, index) => {
                        return (
                            <div key={"cardOptionNumber" + index}>
                                {activeIndex === item.id && item.jsx}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default RenderOptions;