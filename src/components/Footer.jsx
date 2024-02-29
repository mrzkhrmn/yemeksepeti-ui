export const Footer = () => {
  return (
    <footer className="container mx-auto my-8 px-20">
      <hr />
      <div className="flex justify-between mt-8">
        <p>© Yemeksepeti</p>
        <div className="flex flex-col gap-2">
          <p className="text-primary-color text-lg">Yardim Merkezi</p>
          <p className="text-primary-color text-lg">Cerez Politikasi</p>
          <p className="text-primary-color text-lg">Kurumsal Site</p>
          <p className="text-primary-color text-lg">Bilgi Toplama Merkezi</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-primary-color text-lg">Kullanim Kosullari</p>
          <p className="text-primary-color text-lg">Iletisim</p>
          <p className="text-primary-color text-lg">Aydinlanma Metni</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-primary-color text-lg">S.S.S. ve İşlem Rehberi</p>
          <p className="text-primary-color text-lg">Is Ortagimiz Olun</p>
          <p className="text-primary-color text-lg">
            Kişisel Verilerin Korunması ve İşlenmesi <br />
            ve Gizlilik Politikası
          </p>
        </div>
      </div>
    </footer>
  );
};
