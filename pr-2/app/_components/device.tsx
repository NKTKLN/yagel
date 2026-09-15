"use client";

import { useEffect, useState } from "react";
import { DeviceArtwork } from "./device-artwork";

const clockFormatter = new Intl.DateTimeFormat("ru-RU", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function Device() {
  const [now, setNow] = useState<Date | null>(null);
  const time = now ? clockFormatter.format(now) : "--:--";
  const date = now
    ? `${String(now.getDate()).padStart(2, "0")} ${months[now.getMonth()]} ${now.getFullYear()}`
    : "-- --- ----";

  useEffect(() => {
    const update = () => {
      const next = new Date();
      setNow((current) =>
        current &&
        Math.floor(current.getTime() / 60000) ===
          Math.floor(next.getTime() / 60000)
          ? current
          : next,
      );
    };
    const initial = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div
      className="device"
      role="group"
      aria-label="Визуализация Ягель A1 по фотографии: чёрный карбоновый корпус и бумажный E-Ink экран. Местное время и пример показаний воздуха."
    >
      <DeviceArtwork time={time} date={date} />
      <div className="screen-accessible">
        <time className="live-time" dateTime={now?.toISOString()}>
          {time}
        </time>
        <span className="screen-date">
          {now ? dateFormatter.format(now).replace(" г.", "") : "местное время"}
        </span>
      </div>
      <span className="screen-accessible">
        Пример показаний: температура 29,2 °C, влажность 36 %, давление 995 hPa,
        CO₂ 964 ppm.
      </span>
    </div>
  );
}
