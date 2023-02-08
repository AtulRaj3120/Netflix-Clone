import React from 'react';
import "../CSS/HomeScreen.css";
import NavBar from './NavBar';
import Banner from './Banner'
import Row from './Row'
import requests from '../Requests';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <NavBar />
            <Banner />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
        </div>
    )
}

export default HomeScreen