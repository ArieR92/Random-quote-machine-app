import React, { Component } from 'react'
import index from './../index.css';

function Quotes({ quote, label }) {

  return (
    <div id='quote-box'>

        <blockquote id='text'>
          { quote.text}
        </blockquote>

      

        <div id='author' title={quote.author}>{quote.author}</div>

      


    </div>
  )
}

export default Quotes;



//<div className='anime' tittle={quote.anime}>{quote.anime}</div>