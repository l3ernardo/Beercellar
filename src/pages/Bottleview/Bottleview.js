import React from 'react'

import './bottleview.css';

const Bottleview = (props) => {

console.log("bottleview : ", props.location.state.bottleName);

const { id, name, image_url, tagline, brewers_tips, description, food_pairing } = props.location.state; 

    return (
        <div className="bottleview">
            <div id="bottleview__header" className="">
                <h2><span className="byline">{name}</span></h2>
                <p>{description}</p>
            </div>
            <div className="bottleview__box">
                <div id="bottleview__box--tip"> <span className="icon icon-cloud-upload"></span>
                    <h2>Brewer Tips</h2>
                    <p>{brewers_tips}</p> 
                </div>
                <div id="bottleview__box--food"> <span className="icon icon-food"></span>
                    <h2>Food Paring</h2>
                    <ul>
                        {food_pairing.map(item =>
                        <li key={item}>{item}</li>                       
                        )}
                        
                    </ul>
                </div>
                <div id="bottleview__box--description"> <span className="icon icon-qrcode"></span>
                    <h2>Description</h2>
                    <p>{description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Bottleview;
