import React, {useState,} from 'react';
import Quote from './components/Quote/Quote';
import index from './components/index.css';
import {FaTwitter} from 'react-icons/fa';
//import { randomNumber } from './utils/randomNumber';
const url = 'https://type.fit/api/quotes';
//const TweetUrl = 'tweetUrl'


function App () {
    const [quote, setQuotes] = useState('');

const getQuote = () => {
    fetch(url)
    .then(response => response.json() )
    .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
        
        
    });

   
    


}
    return (
    
    <div className='App'>

        <Quote quote={quote}/>


        <button id='new-quote' onClick={getQuote} data-testid='button'>Press here, get motivated</button>

        <a id='tweet-quote' href= {encodeURI(`http://twitter.com/intent/tweet?text=${quote.text}  -${quote.author}`)} className="twitter-share-button"  target='blank'><span><FaTwitter/></span></a>



    </div>
    );
}



export default App;