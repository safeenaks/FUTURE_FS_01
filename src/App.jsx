import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

import bgImage from "./assets/bg.png"

function App() {
  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-auto block"
        />
      </div>

      {/* ================= DARKER OVERLAY (IMPORTANT FIX) ================= */}
      <div className="fixed inset-0 -z-10 bg-black/40" />

      {/* extra contrast gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App