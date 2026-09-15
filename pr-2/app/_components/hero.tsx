import { Device } from "./device";
import { Arrow, Mark } from "./ui";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            ЯГЕЛЬ A1 / МОНИТОР ВОЗДУХА
          </p>
          <h1 id="hero-title">
            Воздух,
            <br />
            который
            <br />
            <span>видно</span>
          </h1>
          <p className="hero-description">
            Настольные E-Ink часы, которые знают,
            <br className="desktop-break" /> чем вы дышите. Всё важное — одним
            взглядом.
          </p>
          <a className="button button-dark" href="#air">
            Смотреть возможности <Arrow diagonal />
          </a>
          <p className="hero-footnote mono">
            БЕЗ АККАУНТА. БЕЗ ОБЯЗАТЕЛЬНОГО ОБЛАКА.
          </p>
        </div>
        <div className="hero-product">
          <div className="product-topline mono">
            <span>НАСТОЛЬНЫЕ ЧАСЫ + ДАТЧИК ВОЗДУХА</span>
            <span>[ A1 ]</span>
          </div>
          <span className="model-type" aria-hidden="true">
            A1
          </span>
          <div className="device-stage">
            <Device />
          </div>
          <div className="product-annotation">
            <span className="annotation-line" />
            <p className="mono">
              ЭЛЕКТРОННЫЕ ЧЕРНИЛА
              <br />
              <span>Никакой подсветки. Только данные.</span>
            </p>
          </div>
          <div className="product-bottomline mono">
            <span>
              <span className="status-dot" />
              ВРЕМЯ В ВАШЕМ БРАУЗЕРЕ
            </span>
            <span>ПОКАЗАНИЯ — ПРИМЕР</span>
          </div>
        </div>
      </div>
      <div className="hero-features">
        <a className="hero-feature" href="#air">
          <span className="feature-symbol mono">
            04<span> / ПОКАЗАТЕЛЯ</span>
          </span>
          <div>
            <p>Комната в четырёх числах</p>
            <span className="mono">CO₂ · °C · % · hPa</span>
          </div>
          <Arrow diagonal />
        </a>
        <a className="hero-feature" href="#display">
          <span className="feature-symbol feature-eink">E-Ink</span>
          <div>
            <p>Спокойный экран</p>
            <span className="mono">БЕЗ ПОДСВЕТКИ</span>
          </div>
          <Arrow diagonal />
        </a>
        <a className="hero-feature green-feature" href="#platform">
          <Mark inverse size={48} />
          <div>
            <p>Ваш дом. Ваши данные.</p>
            <span className="mono">ПОЛНОСТЬЮ ЛОКАЛЬНО</span>
          </div>
          <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
