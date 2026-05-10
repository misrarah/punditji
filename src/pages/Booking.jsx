import { useState } from 'react'
import { Link } from 'react-router-dom'

const contactMethods = [
  {
    icon: '📞',
    label: 'Call or WhatsApp',
    value: '+44 7778 177386',
    href: 'tel:+447778177386',
    note: 'Monday – Sunday, 8 am – 9 pm',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'pandit@example.com',
    href: 'mailto:pandit@example.com',
    note: 'Replies within 24 hours',
  },
  {
    icon: '📍',
    label: 'Coverage Area',
    value: 'Greater London & surrounding counties',
    href: null,
    note: 'Travel to your home or chosen venue',
  },
]

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder – will be wired to a backend / email service
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-maroon-700 text-amber-50 py-16 text-center">
        <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-2">ॐ</p>
        <h1 className="text-4xl font-bold mb-3">Book a Puja</h1>
        <p className="text-amber-300 max-w-xl mx-auto text-sm leading-relaxed">
          To arrange a ceremony, get in touch directly or fill in the enquiry form below.
          Pundit Ji will confirm availability and discuss all the details with you personally.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact cards */}
        <div>
          <h2 className="text-2xl font-bold text-maroon-700 mb-6">Get in Touch</h2>
          <div className="space-y-5">
            {contactMethods.map(({ icon, label, value, href, note }) => (
              <div key={label} className="bg-white rounded-2xl border border-amber-100 shadow p-5 flex items-start gap-4">
                <span className="text-3xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-maroon-700 font-bold hover:text-gold-600 transition-colors text-lg">
                      {value}
                    </a>
                  ) : (
                    <p className="text-maroon-700 font-bold text-lg">{value}</p>
                  )}
                  <p className="text-stone-500 text-sm mt-0.5">{note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Future calendar notice */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📅</span>
              <h3 className="font-bold text-maroon-700">Online Availability Calendar</h3>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              An interactive calendar to check Pundit Ji's availability and request specific
              dates online is coming soon. For now, please call or message directly to confirm
              your preferred date.
            </p>
          </div>

          {/* Services reference */}
          <p className="mt-6 text-stone-500 text-sm">
            Not sure which service you need?{' '}
            <Link to="/services" className="text-maroon-700 font-semibold hover:text-gold-600 underline underline-offset-2">
              Browse all services →
            </Link>
          </p>
        </div>

        {/* Enquiry form */}
        <div>
          <h2 className="text-2xl font-bold text-maroon-700 mb-6">Send an Enquiry</h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <span className="text-5xl block mb-4">🙏</span>
              <h3 className="font-bold text-green-800 text-xl mb-2">Thank You!</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                Your enquiry has been received. Pundit Ji will be in touch with you within 24 hours
                to confirm the details of your ceremony.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-amber-100 shadow p-6 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                    placeholder="+44 7..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="service">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 bg-white"
                >
                  <option value="">Select a service…</option>
                  <option>Satyanarayan Bhagwan Katha</option>
                  <option>Grah Pravesh</option>
                  <option>Grah Shanti</option>
                  <option>Hawan / Homam</option>
                  <option>Annaprasan</option>
                  <option>Namkaran</option>
                  <option>Mundan / Chudakarana</option>

                  <option>Rudrabhishek</option>
                  <option>Navratri Puja & Jagran</option>
                  <option>Bespoke / Custom Puja</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="date">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1" htmlFor="message">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 resize-none"
                  placeholder="Location, any special requirements, number of family members attending…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-maroon-700 hover:bg-maroon-800 text-amber-50 font-bold py-3 rounded-full shadow transition-colors"
              >
                Send Enquiry 🙏
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
