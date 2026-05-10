import { Link } from 'react-router-dom'

const services = [
  {
    name: 'Satyanarayan Bhagwan Katha',
    sanskrit: 'सत्यनारायण भगवान कथा',
    desc: 'A beloved Vaishnav puja dedicated to Lord Vishnu in his form as Satyanarayan. Performed for prosperity, happiness, and the fulfilment of wishes. Ideal for housewarmings, anniversaries, and auspicious occasions.',
    icon: '📖',
  },
  {
    name: 'Grah Pravesh',
    sanskrit: 'गृह प्रवेश',
    desc: 'A sacred ceremony to purify and bless a new home before moving in. Ensures positive energy, protection, and divine grace fill every corner of the house.',
    icon: '🏡',
  },
  {
    name: 'Grah Shanti',
    sanskrit: 'ग्रह शांति',
    desc: 'Planetary pacification rituals to mitigate the malefic effects of planets in one\'s horoscope. Includes Navgraha puja with specific mantras for each of the nine planets.',
    icon: '🌙',
  },
  {
    name: 'Hawan / Homam',
    sanskrit: 'हवन / होम',
    desc: 'A powerful fire ritual in which offerings are made into a sacred fire (agni) while reciting specific mantras. Purifies the atmosphere and invokes divine blessings for health, prosperity, and peace.',
    icon: '🔥',
  },
  {
    name: 'Annaprasan',
    sanskrit: 'अन्नप्राशन',
    desc: 'The sacred rice-feeding ceremony marking a baby\'s first solid food. One of the sixteen samskaras of Hinduism, performed with traditional rituals and blessings for the child\'s health and nourishment.',
    icon: '🍚',
  },
  {
    name: 'Namkaran',
    sanskrit: 'नामकरण',
    desc: 'The Hindu naming ceremony for a newborn, typically performed on the 12th day. The child is officially given their name through Vedic rituals, invoking blessings for a long and blessed life.',
    icon: '✨',
  },
  {
    name: 'Mundan / Chudakarana',
    sanskrit: 'मुंडन / चूड़ाकर्म',
    desc: 'The first head-shaving ceremony for a child, usually performed between ages one and three. Considered a rite of passage that cleanses the soul of past lives and ushers in good health.',
    icon: '🌸',
  },
  {
    name: 'Vivah Puja',
    sanskrit: 'विवाह पूजा',
    desc: 'Pre-wedding and wedding ceremonies conducted according to Vedic traditions including Haldi, Mehendi, and the Saptapadi (seven vows). Full or partial wedding rituals available.',
    icon: '💍',
  },
  {
    name: 'Shradh & Pitru Paksha',
    sanskrit: 'श्राद्ध / पितृ पक्ष',
    desc: 'Ancestral rites performed to honour and offer peace to departed souls. Includes Pind Daan, tarpan, and specific prayers during Pitru Paksha or on the death anniversary.',
    icon: '🙏',
  },
  {
    name: 'Rudrabhishek',
    sanskrit: 'रुद्राभिषेक',
    desc: 'Ritual bathing of Lord Shiva with milk, honey, water, and other sacred substances while chanting the Sri Rudram. Powerful for health, removal of obstacles, and spiritual upliftment.',
    icon: '🛕',
  },
  {
    name: 'Navratri Puja & Jagran',
    sanskrit: 'नवरात्रि पूजा',
    desc: 'Nine-night worship of Goddess Durga in her various forms. Includes daily puja, aarti, and kanya puja. Jagran (all-night devotional celebration) can be arranged for groups.',
    icon: '🪷',
  },
  {
    name: 'Bespoke & Custom Pujas',
    sanskrit: 'विशेष पूजा',
    desc: 'Have a specific deity, occasion, or family tradition in mind? Pundit Ji can conduct a wide range of additional pujas and ceremonies tailored to your family\'s needs and regional customs.',
    icon: '⭐',
  },
]

export default function Services() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-maroon-700 text-amber-50 py-16 text-center">
        <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-2">ॐ</p>
        <h1 className="text-4xl font-bold mb-3">Puja & Ritual Services</h1>
        <p className="text-amber-300 max-w-xl mx-auto text-sm leading-relaxed">
          Pundit Alabhaya Tiwari is experienced in conducting all major Hindu pujas, samskaras,
          and ceremonies with traditional Vedic methods across Greater London.
        </p>
      </div>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ name, sanskrit, desc, icon }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow border border-amber-100 p-6 hover:shadow-md hover:border-saffron-300 transition-all"
            >
              <span className="text-3xl block mb-3">{icon}</span>
              <h3 className="font-bold text-maroon-700 text-lg mb-0.5">{name}</h3>
              <p className="text-gold-600 text-sm mb-3">{sanskrit}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-saffron-50 border-t border-amber-200 py-14 text-center">
        <h2 className="text-2xl font-bold text-maroon-700 mb-3">Ready to Book?</h2>
        <p className="text-stone-600 mb-6 max-w-md mx-auto text-sm">
          Contact Pundit Ji to discuss your requirements, check availability, and arrange a ceremony
          that is meaningful for your family.
        </p>
        <Link
          to="/booking"
          className="bg-maroon-700 hover:bg-maroon-800 text-amber-50 font-bold px-10 py-3 rounded-full shadow transition-colors"
        >
          Request a Booking
        </Link>
      </section>
    </div>
  )
}
