import { useList } from "./stateProvider";
import { Card } from "./card";

export const TomorrowF = () => {
	const { weather, fahrenheit } = useList();

	return (
		<div className="lg:w-[60%] md:w-[80%] w-[90%] mt-[3.5rem] mx-auto">
			<h1 className="border-b-2 md:text-2xl pb-2">
				Forecasts for tomorrow
			</h1>
			<section>
				<Card
					src={
						weather.forecast.forecastday[1].hour[10].condition.icon
					}
					condition={
						weather.forecast.forecastday[1].hour[10].condition.text
					}
					time={"10:00"}
					deg={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[10].temp_f}`
							: `${weather.forecast.forecastday[1].hour[10].temp_c}`
					}
					realFeel={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[10].feelslike_f}`
							: `${weather.forecast.forecastday[1].hour[10].feelslike_c}`
					}
					cor={
						weather.forecast.forecastday[1].hour[10].chance_of_rain
					}
					windSpeed={
						weather.forecast.forecastday[1].hour[10].wind_kph
					}
					humidity={weather.forecast.forecastday[1].hour[10].humidity}
				/>

				<Card
					src={
						weather.forecast.forecastday[1].hour[12].condition.icon
					}
					condition={
						weather.forecast.forecastday[1].hour[12].condition.text
					}
					time={"12:00"}
					deg={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[12].temp_f}`
							: `${weather.forecast.forecastday[1].hour[12].temp_c}`
					}
					realFeel={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[12].feelslike_f}`
							: `${weather.forecast.forecastday[1].hour[12].feelslike_c}`
					}
					cor={
						weather.forecast.forecastday[1].hour[12].chance_of_rain
					}
					windSpeed={
						weather.forecast.forecastday[1].hour[12].wind_kph
					}
					humidity={weather.forecast.forecastday[1].hour[12].humidity}
				/>

				<Card
					src={
						weather.forecast.forecastday[1].hour[14].condition.icon
					}
					condition={
						weather.forecast.forecastday[1].hour[14].condition.text
					}
					time={"14:00"}
					deg={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[14].temp_f}`
							: `${weather.forecast.forecastday[1].hour[14].temp_c}`
					}
					realFeel={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[14].feelslike_f}`
							: `${weather.forecast.forecastday[1].hour[14].feelslike_c}`
					}
					cor={
						weather.forecast.forecastday[1].hour[14].chance_of_rain
					}
					windSpeed={
						weather.forecast.forecastday[1].hour[14].wind_kph
					}
					humidity={weather.forecast.forecastday[1].hour[14].humidity}
				/>

				<Card
					src={
						weather.forecast.forecastday[1].hour[16].condition.icon
					}
					condition={
						weather.forecast.forecastday[1].hour[16].condition.text
					}
					time={"16:00"}
					deg={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[16].temp_f}`
							: `${weather.forecast.forecastday[1].hour[16].temp_c}`
					}
					realFeel={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[16].feelslike_f}`
							: `${weather.forecast.forecastday[1].hour[16].feelslike_c}`
					}
					cor={
						weather.forecast.forecastday[1].hour[16].chance_of_rain
					}
					windSpeed={
						weather.forecast.forecastday[1].hour[16].wind_kph
					}
					humidity={weather.forecast.forecastday[1].hour[16].humidity}
				/>

				<Card
					src={
						weather.forecast.forecastday[1].hour[18].condition.icon
					}
					condition={
						weather.forecast.forecastday[1].hour[18].condition.text
					}
					time={"18:00"}
					deg={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[18].temp_f}`
							: `${weather.forecast.forecastday[1].hour[18].temp_c}`
					}
					realFeel={
						fahrenheit
							? `${weather.forecast.forecastday[1].hour[18].feelslike_f}`
							: `${weather.forecast.forecastday[1].hour[18].feelslike_c}`
					}
					cor={
						weather.forecast.forecastday[1].hour[18].chance_of_rain
					}
					windSpeed={
						weather.forecast.forecastday[1].hour[18].wind_kph
					}
					humidity={weather.forecast.forecastday[1].hour[18].humidity}
				/>
			</section>
		</div>
	);
};
