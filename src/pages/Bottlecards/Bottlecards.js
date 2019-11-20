import React from 'react'

import './bottlecards.css';

import { Link } from 'react-router-dom';

const Bottlecards = (props) => {
 
console.log("Bottlecards props :", props);

const { id, name, image_url, tagline, brewers_tips, description, food_pairing } = props.content; 

  return (
    <div className="bottle">
      <div className="bottle__cards">
        <img className="bottle__cards--img" src={image_url} alt="" />

          <div className="bottle__cards--text">
            <h1>{name}</h1>
            <p>{tagline}</p>
          </div>

          <div>
            <Link to={{pathname: `page/bottleview/${id}`, state: {name:name, image_url:image_url, tagline:tagline, brewers_tips:brewers_tips, description:description, food_pairing:food_pairing}}}>
              <button className="bottle__cards--bottom" >Detail</button>
            </Link>
          </div>      
      </div>
    </div> 
  )
}

export default Bottlecards;
