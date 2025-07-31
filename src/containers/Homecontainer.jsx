import React from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../Services/Actions/Homeaction';
import Home from '../components/Home';

const Homecontainer = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Homecontainer
