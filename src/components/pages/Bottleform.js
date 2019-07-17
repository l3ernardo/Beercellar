import React from 'react'
import './Page.css'

import Form, {
	FormThemeProvider,
	Input,
	Select,
	FormButton
  } from "react-standalone-form";


	const Bottleform = () => (
	<div className="container">
		<Form fields={["name", "description", "brewer_tips", "food_pairing"]}>

		<Input className="input" name="name" label="Beer name" />
		<Input className="input" name="description" label="Description" />
		<Input className="input" name="brewer_tips" label="Brewer Tips" />
		<Select
		  className="input"
		  name="food_pairing"
		  label="Food Pairing"
		  options={["Grilled Chicken", "Fresh Crab", "Cheese Salad", "Shredded Pork"]}
		/>
		<FormButton callback={fields => console.log(fields)}>Save</FormButton>
	  </Form>
	  </div>
	);

export default Bottleform
