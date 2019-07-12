import React from 'react'

const Bottleview = (props) => {

console.log("bottleview : ", props.location.state.bottleName);

const { id, name, image_url, tagline, brewers_tips, description, food_pairing } = props.location.state; 

    return (
        <div id="wrapper">
            <div id="welcome" className="container">
                <h2><span className="byline">{name}</span></h2>
                <p>{description}</p>
            </div>
            <div id="three-column" className="container">
                <div id="tbox1"> <span className="icon icon-cloud-upload"></span>
                    <h2>Brewer Tips</h2>
                    <p>{brewers_tips}</p> 
                </div>
                <div id="tbox2"> <span className="icon icon-food"></span>
                    <h2>Food Paring</h2>
                    <ul>
                        {food_pairing.map(item =>
                        <li key={item}>{item}</li>                       
                        )}
                        
                    </ul>
                </div>
                <div id="tbox3"> <span className="icon icon-qrcode"></span>
                    <h2>Description</h2>
                    <p>{description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Bottleview;
