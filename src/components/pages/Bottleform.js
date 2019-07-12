import React, { Component } from 'react'



 class Bottleform extends Component {
    render() {
        return (
        <div className="container">
			<h3>Submit your Beer</h3>
            <form className="">
				<div className="">
					<label>Beer Name: </label>
					<input className="" type="text" name="name" placeholder="" />
				</div>
				<div className="">
					<span className="">Brewers Tips: </span>
					<textarea className="" name="brewers_tips" placeholder="Your tips..."></textarea>
				</div>
				<div className="">
					<span className="">Tagline: </span>
					<textarea className="" name="tagline" placeholder="Your tags..."></textarea>
				</div>
				<div className="">
					<span className="">Description: </span>
					<textarea className="" name="description" placeholder="Your Comment..."></textarea>
				</div>

				<div className="">
					<button className="">Submit</button>
				</div>
			</form>
        </div>
        )
    }
}

export default Bottleform
