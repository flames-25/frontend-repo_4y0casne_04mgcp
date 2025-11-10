import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Minimal Agency Site',
    desc: 'Clean layout with fluid scroll animations and case studies.',
    tags: ['React', 'Tailwind', 'Motion'],
    link: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'Accessible components, product cards, and cart flows.',
    tags: ['UI/UX', 'Components'],
    link: '#',
  },
  {
    title: 'Dashboard Concept',
    desc: 'Neumorphic-inspired cards and interactive charts.',
    tags: ['Design', 'Data viz'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors" />
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
