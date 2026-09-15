import Image from "next/image";
import { Arrow, Mark } from "./ui";

export function Closing() {
  return (
    <>
      <section className="closing" aria-labelledby="closing-title">
        <div>
          <p className="eyebrow">
            ЯГЕЛЬ A1 / ОТКРЫТОЕ ЖЕЛЕЗО ДЛЯ ВОЗДУХА В ДОМЕ
          </p>
          <h2 id="closing-title">
            Воздух,
            <br />
            который видно
          </h2>
          <div className="closing-actions">
            <a className="button button-paper" href="#choose">
              Найти свой сценарий <Arrow diagonal />
            </a>
            <a className="closing-link" href="#platform">
              Изучить платформу <Arrow />
            </a>
          </div>
        </div>
        <div className="closing-mark">
          <Mark inverse size={192} />
          <span className="mono">СДЕЛАНО ДЛЯ ВАШЕЙ СРЕДЫ</span>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <a href="#top" aria-label="Ягель — в начало">
        <Image
          src="/brand/yagel-lockup-inverse.svg"
          width={151}
          height={64}
          alt="Ягель"
        />
      </a>
      <p className="mono">ЯГЕЛЬ A1 · ЛОКАЛЬНО. ОТКРЫТО. ВАШЕ.</p>
      <a className="footer-top" href="#top">
        Наверх <Arrow diagonal />
      </a>
    </footer>
  );
}
