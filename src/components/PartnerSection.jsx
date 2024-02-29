import { CityCard } from "./CityCard";

export const PartnerSection = () => {
  return (
    <section className="mt-16">
      <h1 className="container mx-auto text-3xl font-light mb-6">
        Restoran veya Mahalle esnafı iş ortağımız olun
      </h1>
      <div className="bg-partner-texture bg-no-repeat bg h-[410px] bg-cover bg-center w-full mx-0"></div>
      <div className="container mx-auto relative">
        <div className="w-[650px] h-[490px] flex flex-col gap-6 absolute -top-[230px] bg-[#FFFFFF] shadow-xl rounded-lg p-6 justify-center">
          <h3 className="text-2xl font-thin">
            Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
          </h3>
          <p className="text-lg font-thin">
            Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
            semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
            işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya
            da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık
            müşteriniz.
          </p>
          <p className="text-lg font-thin">
            Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
            ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
            yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya
            ulaştırıyor.
          </p>
          <p className="text-lg  font-thin">
            Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
            ortaklarımızdan biri olabilirsiniz.
          </p>
          <button className="self-start px-4 py-3 bg-primary-color text-white rounded-lg font-thin">
            Baslayalim
          </button>
        </div>
      </div>
      <div className="mt-[350px] container mx-auto overflow-hidden">
        <h1 className="text-3xl font-light mb-4">
          Türkiye'nin her şehrindeyiz!
        </h1>
        <div className=" grid md:grid-cols-3 lg:grid-cols-4 grid-cols-3 gap-y-4">
          <CityCard cityName={"ankara"} />
          <CityCard cityName={"antalya"} />
          <CityCard cityName={"bursa"} />
          <CityCard cityName={"istanbul"} />
          <CityCard cityName={"izmir"} />
        </div>
      </div>
    </section>
  );
};
