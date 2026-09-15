import Image from "next/image";
import { Arrow, SectionLabel } from "./ui";

export function UsagePaths() {
  return (
    <section
      className="section usage-section"
      id="choose"
      aria-labelledby="choose-title"
    >
      <SectionLabel index="04">ДВА ПУТИ. ОДИН ПРИБОР.</SectionLabel>
      <div className="section-heading">
        <h2 id="choose-title">
          Просто включить
          <br />
          Или пойти дальше?
        </h2>
        <p>
          Готовый прибор и открытая платформа. Вы решаете, сколько в нём будет
          вашего.
        </p>
      </div>
      <div className="usage-grid">
        <article className="usage-card ready-card">
          <span className="eyebrow">01 / ГОТОВ К РАБОТЕ</span>
          <div className="usage-symbol" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 7v25M19 15a23 23 0 1 0 26 0"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h3>Просто включить</h3>
          <p>
            Поставьте на стол и смотрите показания. Для работы экрана не нужны
            аккаунт, приложение или подключение к сети.
          </p>
          <ul>
            <li>Время и воздух — на одном экране</li>
            <li>Home Assistant — без строки кода</li>
            <li>Данные остаются в вашей сети</li>
          </ul>
          <a className="text-link" href="#specifications">
            Узнать о приборе <Arrow diagonal />
          </a>
        </article>
        <article className="usage-card maker-card">
          <span className="eyebrow">02 / ОТКРЫТ ДЛЯ ВАШИХ ИДЕЙ</span>
          <div className="usage-symbol mono" aria-hidden="true">
            {">_"}
          </div>
          <h3>Доработать под себя</h3>
          <p>
            Измените экран, логику или сам корпус. Схема, прошивка и корпус
            открыты по лицензии MIT.
          </p>
          <ul>
            <li>Локальный HTTP/JSON API и MQTT</li>
            <li>SDK на Python и C</li>
            <li>Свои пороги, интерфейс и сценарии</li>
          </ul>
          <a className="text-link" href="#openness">
            Что открыто <Arrow diagonal />
          </a>
        </article>
        <figure className="real-object">
          <Image
            src="/device/yagel-a1-pegboard.jpg"
            alt="Ягель A1 в чёрном корпусе на перфорированной панели рабочего места"
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 35vw"
          />
          <figcaption>
            <span className="eyebrow">ИЗ МАСТЕРСКОЙ</span>
            <span>
              Реальный прибор.
              <br />В реальном пространстве.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
