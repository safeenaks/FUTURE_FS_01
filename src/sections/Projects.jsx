const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Projects
          </h2>

        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="border border-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              GroundMe+
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              An offline mental wellness app that helps users manage PTSD and anxiety.
            </p>

            <div className="flex gap-3 flex-wrap mb-8">

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                HTML
              </span>

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                CSS
              </span>

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                JavaScript
              </span>

            </div>

            <div className="flex gap-4">
                <a
                href="https://github.com/safeenaks/GroundMe-"
                 target="_blank"
                    rel="noopener noreferrer"
                        className="px-5 py-3 border border-white/10 rounded-2xl hover:bg-white/10 transition inline-block"
                    >
                GitHub
                </a>
<a
  href="https://drive.google.com/file/d/1nCRPeu2vu1X5ybCgzDvkpu4EmDyHUxoF/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition inline-block"
>
  Live Demo
</a>

            </div>

          </div>

           {/* Card 2 */}
          <div className="border border-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              FarmWise Chatbot
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              TINK-HER-HACK 3.0 "TOP 3" Project
            </p>

            <div className="flex gap-3 flex-wrap mb-8">

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
               python
              </span>


            

            </div>

            <div className="flex gap-4">
                <a
                href="https://github.com/tinkerhub/tink-her-hack-temp"
                 target="_blank"
                    rel="noopener noreferrer"
                        className="px-5 py-3 border border-white/10 rounded-2xl hover:bg-white/10 transition inline-block"
                    >
                GitHub
                </a>

             <a
  href="https://youtu.be/crUyiLcvdBo?si=KiohTlU_xzu3uWXu"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition inline-block"
>
  Live Demo
</a>

            </div>

          </div>

           {/* Card 3 */}
          <div className="border border-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Traverde
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
            platform which helps you to get a ride at very low cost - travel with a person who is already going in that direction!
            </p>

            <div className="flex gap-3 flex-wrap mb-8">

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                Google Maps
              </span>

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                HTML
              </span>

              <span className="px-4 py-2 border border-white/10 rounded-full text-sm">
                JavaScript
              </span>

            </div>

            <div className="flex gap-4">
                <a
                href="https://github.com/safeenaks/Traverde---your-eco-friendly-driver-"
                 target="_blank"
                    rel="noopener noreferrer"
                        className="px-5 py-3 border border-white/10 rounded-2xl hover:bg-white/10 transition inline-block"
                    >
                GitHub
                </a>
                    <a
                href="https://youtu.be/AmROGq3yCus?si=Q1oFX6RQoqWffWZu"
                 target="_blank"
                rel="noopener noreferrer"
                 className="px-5 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition inline-block"
                    >
                Live Demo
                </a>
            

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects