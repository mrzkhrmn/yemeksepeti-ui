import { BsBasket3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";
import { HeaderLogo } from "./HeaderLogo";

export const Header = () => {
  const [languageBarIsOpen, setLanguageBarIsOpen] = useState(false);

  function handleOpenLanguageBar() {
    setLanguageBarIsOpen((languageBarIsOpen) => !languageBarIsOpen);
  }

  return (
    <header className=" shadow-md shadow-black">
      <nav className="container mx-auto  ">
        <div className=" flex justify-between items-center py-4">
          <HeaderLogo />
          <div className="flex items-center gap-4">
            <button className="transition ease-in-out hover:scale-105 hover:bg-color-interaction-primary/50 border px-3 py-1 border-primary-color text-primary-color rounded-lg">
              <span>Giris Yap</span>
            </button>
            <button className="transition ease-in-out hover:scale-105 hover:bg-color-interaction-secondary px-4 py-1 border font-light rounded-lg bg-primary-color text-white">
              Kayit Ol
            </button>
            <button onClick={handleOpenLanguageBar}>
              <div className="flex items-center gap-2 transition ease-in-out hover:bg-color-interaction-primary/50 px-3 py-1  rounded-full">
                <CiGlobe className="text-2xl" />
                <span className="text-sm">TR</span>
                <IoIosArrowDown
                  className={`transition-all  text-2xl text-primary-color ${
                    languageBarIsOpen && "rotate-180"
                  }`}
                />
              </div>
            </button>
            <button className="transition ease-in-out hover:bg-color-interaction-primary/50 p-[10px] rounded-full">
              <BsBasket3 className="text-primary-color text-xl" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
