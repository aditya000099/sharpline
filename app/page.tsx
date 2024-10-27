import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
