import 'blaze-slider/dist/blaze.css'
import { useBlazeSlider } from 'react-blaze-slider'
import './slider.css'

export const Slider = ({ children }: any) => {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  })

  return (
    <div className="blaze-slider" ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container flex justify-between mx-8">
          <button className="blaze-prev">
            <span className="material-icons-outlined text-4xl p-2">chevron_left</span>
          </button>
          <div className="blaze-track">{children}</div>
          <button className="blaze-next">
            <span className="material-icons-outlined text-4xl p-2">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="blaze-pagination flex justify-center gap-4 my-6"></div>
    </div>
  )
}