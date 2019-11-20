import React, { Component } from 'react'
import BottleCards from '../Bottlecards/Bottlecards'
import { Consumer } from '../../context';
import './bottlelist.css';

class Bottlelist extends Component {

    constructor() {
        super();
        this.state = {
            bottleFilter: ''
        } 
    }

    updateSearch = (e) => {
        this.setState({[e.target.name]: e.target.value.toLowerCase()});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { bottle_List } = value;

                    let filteredbottle = bottle_List.filter((item) => {
                        
                        if(item.name.toLowerCase().includes(this.state.bottleFilter) || item.tagline.toLowerCase().includes(this.state.bottleFilter) )
                            return true
                    });
                    
                    if(bottle_List === undefined || bottle_List.length === 0 ){

                        return "Loading...";

                    } else {
                        return (            
                            <React.Fragment>
                                    <input 
                                        type="text" 
                                        name="bottleFilter" 
                                        placeholder="Search..."
                                        value={this.state.bottleFilter}
                                        onChange={this.updateSearch}
                                    />
                                <br></br>
                                    <span>Search by name or by tagline</span>
                                    <div className="bottlelist">
                                        {filteredbottle.map(item => (
                                            <BottleCards key={item.id} content={item}/>
                                        ))}
                                    </div>
                            </React.Fragment>
                        )
                    }
    
                }}
            </Consumer>
        )
      }
    }

export default Bottlelist