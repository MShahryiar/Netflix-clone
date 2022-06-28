import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from './axios';

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async()=>{
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    useEffect(()=>{
        fetchData();   
    },[fetchUrl])


  return (
    <div className='row'> 
        {/* <h1 style={{color:'white'}}>{{title}}</h1>
        <p style={{color:'yellow'}}>{fetchUrl}</p> */}

        <div>
            {/* {movies.map((movie)=>(
                <>
                <p>{title}</p>
                <p style={{color:'white'}}>{movie.title}</p>
                </>
            ))} */}
            <h1 style={{marginLeft:20}}>{title}</h1>
            <div className='row__posters'>
                {movies.map((movie)=>
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&(
                    <>
                    <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow?movie.poster_path:movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                    </>
                
                ))}   
            </div>


        </div>
    
    </div>
  )
}

export default Row