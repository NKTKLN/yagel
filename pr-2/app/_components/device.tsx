"use client";

import { useEffect, useState } from "react";
import { Mark, SensorIcon } from "./ui";

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

export function Device() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
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
      <div className="device-housing" aria-hidden="true" />
      <div className="device-screen">
        <div className="screen-clock">
          <time className="live-time" dateTime={now?.toISOString()}>
            {now ? clockFormatter.format(now) : "—:—"}
          </time>
          <span className="screen-date">
            {now
              ? dateFormatter.format(now).replace(" г.", "")
              : "местное время"}
          </span>
        </div>
        <div className="screen-readings" aria-hidden="true">
          <div>
            <SensorIcon kind="temperature" />
            <span>
              23.4<small>°C</small>
            </span>
          </div>
          <div>
            <SensorIcon kind="humidity" />
            <span>
              42<small>%</small>
            </span>
          </div>
          <div>
            <SensorIcon kind="pressure" />
            <span>
              1013<small>hPa</small>
            </span>
          </div>
          <div>
            <Mark size={16} />
            <span>
              640<small>ppm</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
