import React from 'react'
import ImageSlider from '../components/slider/Slider'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div>
      <div className="container mt-5 carousel">
        <div className="slider_title">
          <h3>Destinasi</h3>
          <ImageSlider/>
        </div>
      </div>
    </div>
  )
}

export default Homepage