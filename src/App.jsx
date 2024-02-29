import "./App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Kitchens } from "./components/Kitchens";
import { MobileSection } from "./components/MobileSection";
import { PartnerSection } from "./components/PartnerSection";

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PartnerSection />
      <MobileSection />
      <About />
      <Kitchens />
      <Footer />
    </main>
  );
}

export default App;
