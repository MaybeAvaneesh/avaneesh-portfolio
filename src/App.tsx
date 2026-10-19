import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImpactStrip } from "./components/ImpactStrip";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Writing } from "./components/Writing";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ImpactStrip />
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
