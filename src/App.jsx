import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="hover:text-blue-600">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
