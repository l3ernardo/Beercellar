import React from 'react'
import BottleList from '../pages/Bottlelist'
import { Consumer } from '../../context';

const Home = () => {
    return (
      <div className="container">
        <BottleList />
      </div>
    )
}

export default Home;

