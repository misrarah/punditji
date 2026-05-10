import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-maroon-800 text-amber-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="text-2xl mb-1">ॐ</p>
          <h3 className="font-bold text-amber-100 text-lg">Pundit Alabhaya Tiwari</h3>
          <p className="text-sm mt-1 text-amber-300">Hindu Puja Services<br />Greater London</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-amber-100 mb-3 tracking-wide uppercase text-xs">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['/', '/services', '/gallery', '/booking'].map((path, i) => (
              <li key={path}>
                <Link to={path} className="hover:text-gold-400 transition-colors">
                  {['Home', 'Services', 'Gallery', 'Book a Puja'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-amber-100 mb-3 tracking-wide uppercase text-xs">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="tel:+447778177386" className="hover:text-gold-400 transition-colors">
                +44 7778 177386
              </a>
            </li>
            <li>
              <a href="mailto:pandit@example.com" className="hover:text-gold-400 transition-colors">
                pandit@example.com
              </a>
            </li>
            <li>Greater London & surrounding areas</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-maroon-600 text-center py-4 text-xs text-amber-400">
        © {new Date().getFullYear()} Pundit Alabhaya Tiwari. All rights reserved.
      </div>
    </footer>
  )
}
