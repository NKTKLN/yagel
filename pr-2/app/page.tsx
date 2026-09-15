import { AirSection } from "./_components/air-section";
import { Closing, Footer } from "./_components/closing";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { LocalPlatform } from "./_components/local-platform";
import { ProductStory } from "./_components/product-story";
import { Specifications } from "./_components/specifications";
import { UsagePaths } from "./_components/usage-paths";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>
      <div className="launch-shell" id="top">
        <Header />
        <main id="main">
          <Hero />
          <AirSection />
          <ProductStory />
          <LocalPlatform />
          <UsagePaths />
          <Specifications />
          <Closing />
        </main>
        <Footer />
      </div>
    </>
  );
}
