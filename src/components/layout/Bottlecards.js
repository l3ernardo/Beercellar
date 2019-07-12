import React from 'react'

import './Layout.css';

import { Link } from 'react-router-dom';

const Bottlecards = (props) => {

console.log("Bottlecards props :", props);

const { id, name, image_url, tagline, brewers_tips, description, food_pairing } = props.content; 

    return (
      <div className="container">
        <div className="featured-block">
          <div className="row">
            <div className="col-md-4">
              <div className="block">
              <div className="thumbnail">
                <img src={image_url} alt="" className="img-responsive" />
                
                <div className="caption">
                  <h1>{name}</h1>
                  <p>{tagline}</p>
                  <Link to={{pathname: `page/bottleview/${id}`, state: {name:name, image_url:image_url, tagline:tagline, brewers_tips:brewers_tips, description:description, food_pairing:food_pairing}}}><button className="btn">Detail</button></Link>

                </div>

              </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
}

export default Bottlecards;