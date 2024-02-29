import { IoMdCheckmark } from "react-icons/io";

export const About = () => {
  return (
    <section className="container mx-auto my-32 px-20">
      <p className="font-thin">
        Türkiye&apos;nin 81 şehri ve KKTC&apos;de, 50 bini aşkın restoran iş
        ortağımızla, Türkiye’de online yemek siparişi denince ilk akla gelen
        markayız! Restoran zincirleri başta olmak üzere, civarınızdaki en
        sevdiğiniz restoranlardan kolayca sipariş verebilirsiniz.
      </p>
      <p className="font-thin  mt-6">
        Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, Yemeksepeti
        Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar
        içinde gelsin!
      </p>
      <p className="font-thin  mt-6">
        Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da
        kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca
        kapınızda!
      </p>
      <p className="font-thin  mt-6">
        Yemeksepeti Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz
        işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan
        petshopa, tüm kampanyaları ve fırsatlarıyla siparişiniz için hazır.
      </p>
      <h4 className="font-bold text-lg my-5">
        Yemeksepeti’nde sizi neler bekliyor?
      </h4>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1 font-thin">
          <span className=" text-primary-color text-xl ">
            <IoMdCheckmark />
          </span>
          Yemek siparişi ya da market alışverişinde onlarca mutfak ve kategori,
          binlerce çeşit ürün!
        </p>
        <p className="flex items-center gap-1 font-thin">
          <span className=" text-primary-color text-xl ">
            <IoMdCheckmark />
          </span>
          Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!
        </p>
        <p className="flex items-center gap-1 font-thin">
          <span className=" text-primary-color text-xl ">
            <IoMdCheckmark />
          </span>
          Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!
        </p>
        <p className="flex items-center gap-1 font-thin">
          <span className=" text-primary-color text-xl ">
            <IoMdCheckmark />
          </span>
          Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı
          Yardım ekibi!
        </p>
      </div>
      <p className="flex items-center gap-1 font-thin mt-4">
        Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere
        göz atmak!
      </p>
      <h4 className="font-bold text-lg my-5">
        Yemeksepeti yanında, aklındaysa kapında!
      </h4>
    </section>
  );
};
