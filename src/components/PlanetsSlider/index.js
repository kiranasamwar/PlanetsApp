// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-slider-container" data-testid="planets">
      <div className="heading">
        <h1 className="main-heading">PLANETS</h1>
      </div>

      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem planetDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
