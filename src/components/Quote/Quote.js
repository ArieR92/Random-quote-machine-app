import React from 'react'

function Quotes({ quote }) {

  return (
    <div className='quote'>
        

        <blockquote>
          { quote.text } 
        </blockquote>

        <div className='author' title={quote.author}>{quote.author}</div>

      


    </div>
  )
}

export default Quotes;



//<div className='anime' tittle={quote.anime}>{quote.anime}</div>