import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CardContainer = () => {

  const API_URL = "https://api.adviceslip.com/advice";
  const [ advice, setAdvice ] = useState(null);

  function fetchData() {
     axios.get(API_URL)
      .then(res => setAdvice(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, []);


  function clickHandle() {
    fetchData()
  }


  return (
    <div className='card-container'>
      <p className='advice-id'>Advice #{advice ? advice.slip.id : ''}</p>
      <p className='advice'>{advice ? advice.slip.advice : 'Loading...'}</p>
      <img 
        src="/images/pattern-divider-desktop.svg" 
        alt=""
        className='divider' />
      <button className='dice-btn'>
        <img 
        className='dice-img'
        src="/images/icon-dice.svg" 
        alt="dice-icon"
        onClick={advice ? clickHandle : undefined } 
        style={{cursor: advice ? 'pointer' : 'default'}}
      />
      </button>
    </div>
  )
}

export default CardContainer