import { TbCurrentLocation } from "react-icons/tb";

export const HeroSection = () => {
  return (
    <section className="bg-[#F7F7F7] ">
      <div className="flex">
        <div className="flex flex-col mx-auto justify-center gap-6 mr-4">
          <h1 className="text-4xl font-light">
            Yemek ya da market, tüm ihtiyaçların <br />
            kapında!
          </h1>
          <div className="p-4 bg-white rounded-lg flex gap-4 relative  drop-shadow-lg">
            <a
              href="#"
              className="absolute top-7 right-32 text-primary-color hover:text-color-interaction-secondary flex items-center gap-2"
            >
              <TbCurrentLocation className="text-2xl" /> Konumunu Bul
            </a>
            <input
              className="rounded-lg border px-2 py-3 w-[600px] focus:outline-none focus:ring-1"
              placeholder="Adres Belirle veya Sec"
              type="text"
            />
            <button className="transition-all  hover:scale-105 hover:bg-color-interaction-secondary bg-primary-color text-white font-light px-4 rounded-lg ">
              Kesfet
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-tr.png"
            alt="hero image"
            className="h-[600px] max-w-[1280px]"
          />
        </div>
      </div>
    </section>
  );
};
