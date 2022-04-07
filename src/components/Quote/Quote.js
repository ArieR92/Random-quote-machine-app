import React, { Component } from 'react'
import index from './../index.css';

function Quotes({ quote, label }) {

  return (
    <div data-testid='button' className='quote'>

        <blockquote>
          { quote.text}
        </blockquote>

      

        <div className='author' title={quote.author}>{quote.author}</div>

      


    </div>
  )
}

export default Quotes;



//<div className='anime' tittle={quote.anime}>{quote.anime}</div>