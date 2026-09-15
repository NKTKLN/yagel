import { Arrow, Mark, SectionLabel } from "./ui";

const protocols = [
  {
    number: "01",
    title: "HTTP / JSON",
    description:
      "Показания по адресу прибора в вашей сети. Без ключей, токенов и срока действия.",
    tag: "ЛОКАЛЬНЫЙ API",
  },
  {
    number: "02",
    title: "MQTT",
    description:
      "Публикация показаний в брокер. Автоопределение в Home Assistant без программирования.",
    tag: "УМНЫЙ ДОМ",
  },
  {
    number: "03",
    title: "Python / C",
    description:
      "SDK для своих сценариев: читать датчики, менять экран, задавать собственные пороги.",
    tag: "ВАШ КОД",
  },
];

export function LocalPlatform() {
  return (
    <section
      className="local-section"
      id="platform"
      aria-labelledby="platform-title"
    >
      <div className="section">
        <SectionLabel index="03">ЛОКАЛЬНО ПО УМОЛЧАНИЮ</SectionLabel>
        <div className="section-heading">
          <h2 id="platform-title">
            Ваши данные.
            <br />
            <span className="local-heading-line">У вас дома.</span>
          </h2>
          <p>
            Между датчиком и вашим кодом нет чужого сервера. Прибор работает сам
            по себе, а данные доступны в сети.
          </p>
        </div>
        <div className="network-panel">
          <div className="network-topline mono">
            <span>
              <span className="status-dot" />
              ВАША ЛОКАЛЬНАЯ СЕТЬ
            </span>
            <span>БЕЗ ОБЯЗАТЕЛЬНОГО ОБЛАКА</span>
          </div>
          <div className="network-flow">
            <div className="network-device">
              <Mark inverse size={48} />
              <strong>Ягель A1</strong>
              <span className="mono">CO₂ · °C · % · hPa</span>
            </div>
            <div className="network-wire">
              <span className="mono">HTTP / JSON · MQTT</span>
              <span className="wire-line">
                <Arrow />
              </span>
            </div>
            <div className="network-destinations">
              <div>
                <span className="network-node-icon" aria-hidden="true">
                  ⌂
                </span>
                <div>
                  <strong>Home Assistant</strong>
                  <span>Определяется автоматически</span>
                </div>
              </div>
              <div>
                <span className="network-node-icon mono" aria-hidden="true">
                  {">_"}
                </span>
                <div>
                  <strong>Ваши приложения</strong>
                  <span>Те же данные. Свои сценарии.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="network-footer mono">
            <span>БЕЗ АККАУНТА</span>
            <span>БЕЗ API-КЛЮЧЕЙ</span>
            <span>БЕЗ ПРОДЛЕНИЯ ДОСТУПА</span>
          </div>
        </div>
        <div className="protocol-grid">
          {protocols.map(({ number, title, description, tag }) => (
            <article className="protocol-card" key={number}>
              <div className="protocol-number mono">
                <span>{number}</span>
                <Arrow diagonal />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="protocol-tag mono">{tag}</span>
            </article>
          ))}
        </div>
        <div className="satellite-note">
          <span className="mono">A1 + S1</span>
          <p>
            От одной комнаты до этажа. Датчики-спутники Ягель S1 передают
            показания в тот же API.
          </p>
          <Arrow diagonal />
        </div>
      </div>
    </section>
  );
}
