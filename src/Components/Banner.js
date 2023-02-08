import React, { useEffect } from 'react'
import { useState } from 'react'
import '../CSS/Banner.css'
import axios from '../axios'
import requests from '../Requests'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))])
            // return request
        } 
        fetchData()
    }, []) 
    
    console.log(movie)

    function truncate(s, n) {
        return s?.length > n ? s.substr(0, n - 1) + '...' : s
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 100)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner