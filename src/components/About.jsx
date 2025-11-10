import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-3xl"
        >
          I’m a developer who enjoys crafting interfaces that feel effortless to use. My strengths are in React, design systems, and subtle animations that make products feel alive.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'React', desc: 'Hooks, performance, SSR' },
            { title: 'UI/UX', desc: 'Design systems, accessibility' },
            { title: 'Animation', desc: 'Framer Motion, microinteractions' },
            { title: 'Tooling', desc: 'Vite, Tailwind, testing' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
