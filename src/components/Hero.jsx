import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1rF4t6UQ4jnq3M1d/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Hi, I’m <span className="text-blue-600">Your Name</span>. I build clean and modern web experiences.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Frontend-focused developer who loves minimal aesthetics, smooth interactions, and delightful UX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-md border border-gray-300 text-gray-800 hover:border-gray-400">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
    </section>
  )
}
