import heroImg from "../assets/hero.jpg" // or png

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-emerald-300 tracking-widest uppercase text-sm mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-emerald-200">Safeena K S</span>
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I build clean, modern and responsive web applications using React and Node.js.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-emerald-300 text-black font-medium hover:bg-emerald-200 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/10 hover:border-emerald-300 transition">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative group">
  
  {/* glow behind image */}
  <div className="absolute -inset-6 bg-gradient-to-tr from-lime-200/20 via-green-100/10 to-emerald-200/20 blur-2xl rounded-3xl group-hover:blur-3xl transition" />

  {/* image frame */}
  <div className="relative">
    <img
      src={heroImg}
      className="w-[280px] h-[280px] object-cover rounded-3xl border border-white/10 shadow-2xl
      transition duration-500 group-hover:scale-[1.03]"
    />
  </div>

</div>

      </div>
    </section>
  )
}

export default Hero