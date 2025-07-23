export interface WeatherDTO {
  name: string;
  temp: number;
}

export async function fetchWeather(city: string): Promise<WeatherDTO> {
  const res = await fetch(
    `http://localhost:3333/weather/${encodeURIComponent(city)}`
  );

  if (!res.ok) {
    // allow calling component to decide how to present the error
    throw new Error(`API returned ${res.status}`);
  }

  return res.json();
}
