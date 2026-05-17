import { motion } from "framer-motion"

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Python",
  "Git & GitHub",
  "REST APIs",
  "UI/UX Design",
  "Problem Solving",
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            Skills & Stack
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Technologies <br />
            I Work With
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 overflow-hidden cursor-pointer"
            >

              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10 blur-2xl" />

              {/* Content */}
              <div className="relative z-10">

                <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                  Technology
                </p>

                <h3 className="text-2xl font-semibold">
                  {skill}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills