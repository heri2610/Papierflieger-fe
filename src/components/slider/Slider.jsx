import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css"
import Korea from './destinasi/Korea.png'
import Dubai from './destinasi/Dubai.png'
import Bali from './destinasi/Bali.png'
// import './Slider.scss'

function ImageSlider() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
  return (
    <Slider {...settings}>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={Korea} alt="" />
                </div>
                <ul>
                    <li>Korea</li>
                    <li>Indonesia</li>
                </ul>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={Dubai} alt="" />
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={Bali} alt="" />
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default ImageSlider