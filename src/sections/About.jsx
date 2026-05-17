import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Developer <br />
            & Problem Solver
          </h2>

        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8"
          >

            <p className="text-white/70 leading-relaxed text-lg">

              I am a passionate full stack developer focused on
              building modern, responsive, and scalable web applications.

              I enjoy solving problems, creating futuristic user interfaces,
              and continuously improving my development skills through
              projects, DSA practice, and real-world learning.

            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="border border-white/10 rounded-2xl p-5">

                <h3 className="text-3xl font-bold text-blue-400">
                  10+
                </h3>

                <p className="text-white/70 mt-2">
                  Projects Built
                </p>

              </div>

              <div className="border border-white/10 rounded-2xl p-5">

                <h3 className="text-3xl font-bold text-blue-400">
                  Full Stack
                </h3>

                <p className="text-white/70 mt-2">
                  Development Focus
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between"
          >

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-5">
                Current Focus
              </p>

              <div className="space-y-5">

                <div className="border border-white/10 rounded-2xl p-5">
                  React Development
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  Full Stack Projects
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  DSA & Problem Solving
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  UI/UX Exploration
                </div>

              </div>

            </div>

            <div className="mt-10">

              <p className="text-white/70 leading-relaxed">
                Passionate about building clean digital systems
                that combine performance, aesthetics, and usability.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About