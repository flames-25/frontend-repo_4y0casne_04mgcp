import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Let’s work together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600 max-w-2xl"
        >
          I’m open to freelance opportunities, collaborations, or just a friendly chat.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            <Mail size={18} /> Email me
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border"> 
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
