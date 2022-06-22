import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <div>
            <h2>Rows</h2>
        </div>
    </div>
  )
}

export default HomeScreen