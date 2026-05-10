import { Link } from 'react-router-dom'
import portrait from '../assets/IMG_5934.JPG'
import ceremony1 from '../assets/IMG_6146.JPG'
import temple from '../assets/IMG_0724.jpeg'

const highlights = [
  { icon: '🪔', title: 'Authentic Vedic Rituals', desc: 'Traditional ceremonies performed with correct Sanskrit mantras and full vidhi.' },
  { icon: '🏡', title: 'Serving Greater London', desc: 'Available across all London boroughs and surrounding areas at your home or venue.' },
  { icon: '🙏', title: 'All Occasions Covered', desc: 'From new-home blessings and naming ceremonies to annual Satyanarayan Kathas.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-maroon-700 text-amber-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/om-pattern.svg')] bg-repeat bg-[length:120px_120px]" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gold-400 uppercase tracking-widest text-sm mb-3 font-semibold">ॐ नमः शिवाय</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Pundit Alabhaya Tiwari
            </h1>
            <p className="text-xl text-amber-200 mb-2">Hindu Pundit · Greater London</p>
            <p className="text-amber-300 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
              Bringing the blessings of authentic Vedic rituals to your home. Deeply experienced
              in all major Hindu pujas, kathas and samskaras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/booking"
                className="bg-gold-500 hover:bg-gold-600 text-stone-900 font-bold px-8 py-3 rounded-full shadow-lg transition-colors"
              >
                Book a Puja
              </Link>
              <Link
                to="/services"
                className="border-2 border-amber-200 hover:bg-amber-200 hover:text-maroon-800 text-amber-100 font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold-400 shadow-2xl bg-maroon-600">
            <img
              src={portrait}
              alt="Pundit Alabhaya Tiwari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-maroon-700 mb-2">Why Choose Pundit Ji?</h2>
        <p className="text-center text-stone-500 mb-12 max-w-xl mx-auto">
          A trusted name in the Hindu community across Greater London for traditional and heartfelt ceremonies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition-shadow border border-amber-100">
              <span className="text-4xl block mb-3">{icon}</span>
              <h3 className="font-bold text-maroon-700 text-lg mb-2">{title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-saffron-50 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0 w-full md:w-96 h-64 rounded-2xl overflow-hidden shadow-lg bg-stone-200">
            <img
              src={temple}
              alt="Pundit Ji at the temple"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-gold-600 uppercase tracking-widest text-xs font-semibold mb-2">About Pundit Ji</p>
            <h2 className="text-3xl font-bold text-maroon-700 mb-4">Rooted in Tradition, Present in London</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Pundit Alabhaya Tiwari is a learned Hindu priest with deep knowledge of Vedic scriptures,
              Sanskrit mantras, and the ancient traditions of Sanatan Dharma. Having served the Hindu
              community in Greater London for many years, he brings sincerity, precision, and devotion
              to every ceremony he leads.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether it is a joyous Grah Pravesh to bless your new home, an Annaprasan for your child,
              or a Satyanarayan Katha for the whole family, Pundit Ji ensures every ritual is conducted
              with complete vidhi and the right spiritual intent.
            </p>
            <Link to="/services" className="inline-block bg-maroon-700 hover:bg-maroon-800 text-amber-50 font-semibold px-6 py-2.5 rounded-full transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Ceremony feature */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-maroon-700 mb-2">Sacred Ceremonies with Devotion</h2>
        <p className="text-stone-500 mb-10 max-w-xl mx-auto">
          Every flame lit, every mantra recited, every offering made with complete dedication.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-xl mx-auto max-w-3xl bg-stone-200">
          <img
            src={ceremony1}
            alt="Hawan ceremony"
            className="w-full h-auto"
          />
        </div>
        <div className="mt-10">
          <Link to="/booking" className="bg-gold-500 hover:bg-gold-600 text-stone-900 font-bold px-10 py-3 rounded-full shadow transition-colors">
            Request a Booking
          </Link>
        </div>
      </section>
    </>
  )
}
