import WeatherComponent from "./component/weather";

export default function Home() {
  return (
    <div className="bg-white shadow-xl">
      <h1 className="text-black font-serif text-5xl flex items-center justify-center ">
        Weather Forecast
      </h1>
      <WeatherComponent />
    </div>
  );
}
