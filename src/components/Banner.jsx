import "./Banner.css"
import {useState,useEffect} from 'react'
import axios from "../axios";
import requests from '../requests'


function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

        

 function truncate(string,n) {
            return string?.length> n ? string.substr(0,n-1) + '...' : string;
 }




    return (
        <div className="banner"   style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          
        }} >
            <div className="banner__contents">
                <h1 className="banner__title"> {movie?.title || movie?.name || movie?.originalname}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">Mylist</button>
                </div>
                <p className="banner__description">{truncate(movie?.overview,150)}</p>
              
           
            </div>
 
             
            <div className="banner__fadebottom"/>
             
          
        </div>
    )
}

export default Banner
