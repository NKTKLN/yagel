import { Mark, SectionLabel } from "./ui";

const facts = [
  ["Устройство", "Настольные часы и монитор воздуха"],
  ["Показания", "CO₂, температура, влажность, давление"],
  ["Дисплей", "E-Ink, без подсветки"],
  ["Работа без сети", "Время и показания — на самом приборе"],
  ["Доступ к данным", "Локальный HTTP/JSON API, MQTT"],
  ["Умный дом", "Автоопределение в Home Assistant"],
  ["SDK", "Python и C"],
  ["Лицензия исходников", "MIT: схема, прошивка, корпус"],
];

const openParts = [
  {
    number: "01",
    name: "Схема",
    layer: "Электроника",
    title: "Разобраться в устройстве",
    description:
      "Изучайте подключение датчиков и дорабатывайте электронику под свою задачу. Схема открыта вместе с остальными исходниками.",
    icon: "M8 8h16v16H8ZM12 12h8v8h-8ZM12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5",
  },
  {
    number: "02",
    name: "Прошивка",
    layer: "Логика и экран",
    title: "Задать свои правила",
    description:
      "Меняйте интерфейс, логику и пороги показаний. SDK на Python и C даёт доступ к тем же возможностям, что использует прошивка.",
    icon: "M3 6h26v20H3ZM8 12l4 4-4 4m8 0h7",
  },
  {
    number: "03",
    name: "Корпус",
    layer: "Форма устройства",
    title: "Изменить под себя",
    description:
      "Исходники корпуса доступны для изменений. А локальные HTTP/JSON и MQTT позволяют связать прибор с вашими приложениями и сценариями.",
    icon: "m16 3 12 7v13l-12 7-12-7V10Zm0 14v13M4 10l12 7 12-7M10 6.5l12 7V20",
  },
];

export function Specifications() {
  return (
    <section
      className="section specifications"
      id="specifications"
      aria-labelledby="spec-title"
    >
      <SectionLabel index="05">ИНЖЕНЕРНАЯ ОСНОВА</SectionLabel>
      <div className="section-heading">
        <h2 id="spec-title">Всё по делу.</h2>
        <p>
          Ключевые факты о Ягеле A1.
          <br />
          Один прибор, открытый на каждом уровне.
        </p>
      </div>
      <div className="spec-grid">
        <aside
          className="source-manifest"
          aria-label="Открытые исходники под лицензией MIT"
        >
          <div className="manifest-top">
            <span className="eyebrow">ОТКРЫТЫЕ ИСХОДНИКИ</span>
            <Mark inverse size={32} />
          </div>
          <div className="manifest-license">
            <span className="mono">MIT</span>
            <p>
              Открытая лицензия.
              <br />
              Свобода дорабатывать.
            </p>
          </div>
          <ol className="manifest-layers">
            {openParts.map(({ number, name, layer }) => (
              <li key={number}>
                <span className="mono">{number}</span>
                <strong>{name}</strong>
                <span>{layer}</span>
              </li>
            ))}
          </ol>
          <p className="manifest-note">
            Изучайте устройство.
            <br />
            Собирайте на его основе своё.
          </p>
        </aside>
        <div className="spec-sheet">
          <div className="spec-sheet-heading">
            <h3 className="eyebrow">ЯГЕЛЬ A1 / ОСНОВНЫЕ ХАРАКТЕРИСТИКИ</h3>
            <span className="mono">[ A1 ]</span>
          </div>
          <dl className="spec-table">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="open-parts" id="openness">
        {openParts.map(({ number, name, title, description, icon }) => (
          <article className="open-part" key={number}>
            <div className="open-part-heading">
              <span className="eyebrow">
                {number} / {name.toUpperCase()}
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d={icon}
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
