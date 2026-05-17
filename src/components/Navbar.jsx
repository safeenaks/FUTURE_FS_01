const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-[0.2em]">
          SAFEENA
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#about"
            className="hover:text-white transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-white transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-white transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar