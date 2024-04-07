import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../constants/axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'




function RowPost(props) { 
  const [movie , setMovie] = useState([])
  const [url  ,setUrl] = useState()
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
         console.log("CARD///",response.data.results);
         setMovie(response.data.results)
      })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }


  function handleCard(id) {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if (response.data.resultslength !== 0) {
          setUrl(response.data.results[0])
          console.log("//////",response.data.results[0]);
        }else{
          console.log('array is empty');
        }
    })
  }

  return (
    <div className='row'>
  <h2>{props.title}</h2>
  <div className='posters'>
    {movie.map((obj) => (
      <div key={obj.id} className='poster-container'>
        <img
          onClick={() => handleCard(obj.id)}
          className={props.isSmall ? 'smallPoster' : 'poster'}
          alt={obj.title} // Set alt text to the movie title for accessibility
          src={`${imageUrl + obj.backdrop_path}`}
        />
        <p className='movie-info'>
          {obj.title} ({obj.release_date ? obj.release_date.substring(0, 4) : 'N/A'})
        </p>
      </div>
    ))}
  </div>
  {url && <YouTube videoId={url.key} opts={opts} />}
</div>

  
  )
}

export default RowPost
