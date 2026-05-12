import { JSX, useContext } from "react";

// UI
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";

// Hooks
import { ProfileContex } from "@/hooks/useProfileContex";
import { DarkModeContex } from "@/hooks/useDarkModeContex";
import ProfileCardBody from "@/components/ProfileMenu/ProfileCardBody";
import ProfileError from "@/components/ProfileMenu/ProfileError";

// Utils
import classNames from "classnames";

// Types
import { GamesNames } from "@/types/ContexTypes";

// Images
import ets2 from "@/static/icons/games/ets2.webp";
import ats from "@/static/icons/games/ats.webp";

const SelectProfile = () => {
    const { selectedSave, profilesNotFound, game, setGame } =
        useContext(ProfileContex);
    const { opasityStatus } = useContext(DarkModeContex);

    const setGameAndScroll = (game: GamesNames) => {
        setGame(game);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const renderCart = (
        key: string,
        name: string,
        icon: JSX.Element
    ): JSX.Element => {
        return (
            <Tab
                key={key}
                title={
                    <div className="flex items-center space-x-2 px-1">
                        {icon}
                        <span className="font-medium tracking-wide">
                            {name}
                        </span>
                    </div>
                }
            />
        );
    };

    return (
        /* Cambié bottom-0 a bottom-6 para que flote estilo "Dock" de Apple */
        <div className="fixed bottom-6 z-30 mt-auto flex w-full justify-center gap-3 px-4">
            {profilesNotFound && <ProfileError />}
            
            {/* SELECTOR DE JUEGO (ETS2 / ATS) */}
            <div
                className={classNames(
                    "transition-all duration-300 hover:opacity-100",
                    selectedSave && opasityStatus ? "opacity-50" : "opacity-100"
                )}
            >
                <Tabs
                    onSelectionChange={(index) => setGameAndScroll(index as GamesNames)}
                    selectedKey={game}
                    size="md"
                    aria-label="Seleccionar juego"
                    isVertical
                    radius="lg"
                    classNames={{
                        /* Efecto Cristal (Glassmorphism) para las pestañas */
                        tabList: "bg-white/70 dark:bg-[#000000]/70 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-xl",
                        /* Cursor en color Naranja Titanes */
                        cursor: "bg-[#ff5500] shadow-md",
                        tabContent: "group-data-[selected=true]:text-white text-gray-500 transition-colors"
                    }}
                >
                    {renderCart(
                        "ets2",
                        "ETS 2",
                        <img src={ets2} className="w-6 drop-shadow-md" alt="ets2" />
                    )}
                    {renderCart(
                        "ats",
                        "ATS",
                        <img src={ats} className="w-6 drop-shadow-md" alt="ats" />
                    )}
                </Tabs>
            </div>

            {/* SELECTOR DE PERFIL */}
            <div
                className={classNames(
                    "flex w-full max-w-4xl items-center transition-all duration-300 hover:opacity-100",
                    selectedSave && opasityStatus ? "opacity-50" : "opacity-100"
                )}
            >
                {/* Tarjeta de cristal para los perfiles */}
                <Card 
                    className="flex w-full h-full bg-white/70 dark:bg-[#000000]/70 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-xl rounded-[24px]"
                >
                    <CardBody className="px-5 py-2 flex justify-center">
                        <ProfileCardBody />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default SelectProfile;