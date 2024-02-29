export const CityCard = ({ cityName }) => {
  return (
    <div
      className={`transition-all bg-no-repeat flex items-end w-[350px] h-[280px] overflow-hidden bg-[url('https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-${cityName}.jpg?width=720')] bg-100% bg-center rounded-lg hover:bg-150%`}
    >
      <p className="bg-[#FFFFFF] font-thin text-lg py-2 px-4 rounded-lg ml-2 mb-2">
        {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
      </p>
    </div>
  );
};
