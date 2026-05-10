import { useState } from 'react'
import portrait from '../assets/IMG_5934.JPG'
import ceremony1 from '../assets/IMG_6144.JPG'
import ceremony2 from '../assets/IMG_6145.JPG'
import ceremony3 from '../assets/IMG_6146.JPG'
import altar from '../assets/IMG_2024.jpeg'
import temple from '../assets/IMG_0724.jpeg'

const photos = [
  {
    src: portrait,
    alt: 'Pundit Alabhaya Tiwari',
    caption: 'Pundit Alabhaya Tiwari',
  },
  {
    src: ceremony1,
    alt: 'Hawan ceremony',
    caption: 'Performing Hawan – sacred fire ritual',
  },
  {
    src: ceremony2,
    alt: 'Puja with sacred flame',
    caption: 'Aarti and mantra chanting',
  },
  {
    src: ceremony3,
    alt: 'Hawan with offerings',
    caption: 'Hawan with Ahuti (sacred offerings)',
  },
  {
    src: altar,
    alt: 'Puja altar arrangement',
    caption: 'Beautifully arranged puja altar',
  },
  {
    src: temple,
    alt: 'Pundit Ji at the temple',
    caption: 'Pundit Ji at the temple with deities',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      {/* Header */}
      <div className="bg-maroon-700 text-amber-50 py-16 text-center">
        <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-2">ॐ</p>
        <h1 className="text-4xl font-bold mb-3">Gallery</h1>
        <p className="text-amber-300 max-w-xl mx-auto text-sm">
          A glimpse into the sacred ceremonies performed by Pundit Ji across Greater London.
        </p>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow border border-amber-100 bg-stone-100 aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400"
              onClick={() => setLightbox(idx)}
              aria-label={`View photo: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[80vh] mx-auto rounded-xl shadow-2xl object-contain"
            />
            <p className="text-center text-amber-200 mt-4 text-sm">{photos[lightbox].caption}</p>
            <button
              className="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-gold-400"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
            {/* Prev / Next */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-4xl hover:text-gold-400 hidden sm:block"
              onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-4xl hover:text-gold-400 hidden sm:block"
              onClick={() => setLightbox((lightbox + 1) % photos.length)}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
