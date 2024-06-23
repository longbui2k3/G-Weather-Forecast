import { FourDayForest } from "./FourDayForest";
import { TodayWeather } from "./TodayWeather";

export function CityWeather({ current, forecastday }) {
  return (
    <div>
      <TodayWeather current={current}/>
      <FourDayForest forecastday={forecastday} />
    </div>
  );
}
