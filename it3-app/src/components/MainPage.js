import React from 'react'
import { Link } from 'react-router-dom'
export const MainPage = () => {
    return (
  <div className="siu">
      <div className="backg">
      </div>
      <div className="bg-text">
      <h1>Solar Energy</h1>
    <p>Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, 
        solar architecture, molten salt power plants and artificial photosynthesis</p>
        <Link className="btn btn-danger" to="/solar">See more</Link>

      </div>
      
  </div>
    )
}
