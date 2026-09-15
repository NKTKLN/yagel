import Image from "next/image";
import { Mark, SectionLabel } from "./ui";

export function ProductStory() {
  return (
    <section
      className="section product-story"
      id="display"
      aria-labelledby="display-title"
    >
      <SectionLabel index="02">ЭЛЕКТРОННЫЕ ЧЕРНИЛА</SectionLabel>
      <div className="display-grid">
        <figure className="workshop-photo">
          <Image
            src="/device/yagel-a1-handheld.jpg"
            alt="Реальный модуль Ягель A1 в руке: E-Ink экран, плата и подключённое питание"
            fill
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          <figcaption className="photo-label mono">
            ЯГЕЛЬ A1 / ВНУТРИ КОРПУСА
          </figcaption>
        </figure>
        <div className="display-copy">
          <span className="eyebrow">СОЗДАН ДЛЯ ВАШЕГО СТОЛА</span>
          <h2 id="display-title">
            Заметен,
            <br />
            когда нужен.
            <br />
            <span className="muted">
              Не светит,
              <br />
              когда спите.
            </span>
          </h2>
          <p>
            Электронные чернила отражают внешний свет, как бумага. Экран не
            требует подсветки и сохраняет изображение без питания.
          </p>
          <p>
            Время и воздух всегда перед глазами.
            <br />
            На рабочем столе или рядом с кроватью.
          </p>
          <div className="display-facts">
            <span>
              <strong>0</strong>подсветки
            </span>
            <span>
              <strong>E-Ink</strong>изображение остаётся
            </span>
          </div>
        </div>
      </div>
      <div className="brand-note">
        <div className="brand-note-mark">
          <Mark size={48} />
        </div>
        <p>Маленький знак. Та же задача.</p>
        <span>
          Пиксельный росток рядом с CO₂ — тот же знак, что на логотипе. Иконка
          из прошивки, 16 × 16 пикселей.
        </span>
      </div>
    </section>
  );
}
