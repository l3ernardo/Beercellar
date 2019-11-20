import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

export class Provider extends Component {

    state = {
        bottle_List: [],
        heading: "top 10 bottles"
    };

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(res=> {
            
        console.log("res context : ", res.data);  

            this.setState({bottle_List:res.data});
        })
        .catch(err => console.log(err));
      }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 