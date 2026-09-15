"use client";

import { useState } from "react";
import { Arrow, Mark, SectionLabel, SensorIcon } from "./ui";

const metrics = [
  {
    kind: "temperature",
    label: "Температура",
    value: "23.4",
    unit: "°C",
    description: "Как тепло в комнате",
  },
  {
    kind: "humidity",
    label: "Влажность",
    value: "42",
    unit: "%",
    description: "Сколько влаги в воздухе",
  },
  {
    kind: "pressure",
    label: "Давление",
    value: "1013",
    unit: "hPa",
    description: "Атмосферное давление",
  },
] as const;

export function AirSection() {
  const [ventilated, setVentilated] = useState(false);
  return (
    <section
      className="section air-section"
      id="air"
      aria-labelledby="air-title"
    >
      <SectionLabel index="01">СРЕДА В ЦИФРАХ</SectionLabel>
      <div className="section-heading">
        <h2 id="air-title">
          Невидимое.
          <br />
          Теперь в цифрах.
        </h2>
        <p>
          Воздух не подскажет, когда открыть окно. Ягель покажет CO₂,
          температуру, влажность и давление. Вам останется взглянуть.
        </p>
      </div>
      <div className="air-grid">
        <article className={`co2-card${ventilated ? " is-fresh" : ""}`}>
          <div className="card-topline">
            <span className="eyebrow">CO₂ / УГЛЕКИСЛЫЙ ГАЗ</span>
            <Mark size={32} />
          </div>
          <div className="co2-state" aria-live="polite" aria-atomic="true">
            <p className="co2-number mono">
              {ventilated ? "640" : "1280"}
              <span>ppm</span>
            </p>
            <p className="co2-status">
              <span className="status-dot" />
              {ventilated ? "После проветривания" : "Пора проветрить"}
            </p>
          </div>
          <div className="co2-scale" aria-hidden="true">
            <div className="scale-segments">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="scale-labels mono">
              <span>400</span>
              <span>1000</span>
              <span>2000 ppm</span>
            </div>
          </div>
          <div className="co2-bottom">
            <p>
              Выше 1000 ppm — сигнал
              <br />
              обновить воздух в комнате.
            </p>
            <button
              className="demo-button"
              onClick={() => setVentilated(!ventilated)}
              aria-pressed={ventilated}
            >
              {ventilated ? "До проветривания" : "Открыть окно"}
              <Arrow />
            </button>
          </div>
          <p className="demo-note mono">
            ИНТЕРАКТИВНЫЙ ПРИМЕР · НЕ ТЕКУЩИЕ ИЗМЕРЕНИЯ
          </p>
        </article>
        <div className="metric-stack">
          {metrics.map(({ kind, label, value, unit, description }) => (
            <article className="metric-card" key={kind}>
              <div className="metric-name">
                <SensorIcon kind={kind} />
                <h3>{label}</h3>
                <span>{description}</span>
              </div>
              <p className="metric-value mono">
                {value}
                <span>{unit}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
      <p className="section-note mono">
        ОДИН ЭКРАН. ЧЕТЫРЕ ПОКАЗАТЕЛЯ. БЕЗ ПРИЛОЖЕНИЯ В РУКАХ.
      </p>
    </section>
  );
}
