export const fetchLocationId = async (city: string): Promise<number> => {
    const response = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${city}`,
    );
    const locations = await response.json();
    return locations[0].woeid;
};

interface WeatherData {
    location: string
    weather: string
    temperature: number
}

export const fetchWeather = async (woeId: number): Promise<WeatherData> => {
    const response = await fetch(
        `https://www.metaweather.com/api/location/${woeId}/`,
    );
    const {title, consolidated_weather} = await response.json();
    const {weather_state_name, the_temp} = consolidated_weather[0];

    return {
        location: title,
        weather: weather_state_name,
        temperature: the_temp,
    };
};
