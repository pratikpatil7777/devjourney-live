import { useState } from "react";
import { fetchWeather, WeatherDTO } from "@/utils/fetchWeather";

const WeatherBox: React.FC = () => {
  const [city, setCity] = useState("London");
  const [data, setData] = useState<WeatherDTO | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    setStatus("loading");
    setError(null);
    try {
      const w = await fetchWeather(city.trim());
      setData(w);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Unknown error contacting API"
      );
    }
  };

  return (
    <section className="rounded-lg border p-6 shadow-sm dark:border-zinc-700">
      <h2 className="mb-4 text-xl font-semibold">Weather demo</h2>

      <form
        onSubmit={handleSubmit}
        className="flex gap-3 max-sm:flex-col sm:items-end"
      >
        <label className="flex flex-1 flex-col gap-1">
          <span className="text-sm font-medium">City</span>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-md border p-2 dark:border-zinc-600 dark:bg-zinc-800"
            placeholder="e.g. Tokyo"
            required
            aria-label="City name"
          />
        </label>

        <button
          type="submit"
          className="rounded-md bg-brand px-4 py-2 font-medium text-white transition hover:bg-brand-dark disabled:opacity-40"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Loading…" : "Fetch"}
        </button>
      </form>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      {data && (
        <p className="mt-4 text-lg">
          <span className="font-semibold">{data.name}</span>: {data.temp}°C
        </p>
      )}
    </section>
  );
};

export default WeatherBox;
