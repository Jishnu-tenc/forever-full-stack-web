import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { assets } from '../assets/frontend_assets/assets'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-0-0-100% min-w-0"></div>
        <div className="embla__slide flex-0-0-100% min-w-0"></div>
        <div className="embla__slide flex-0-0-100% min-w-0">Slide 3</div>
      </div>
    </div>
  )
}




