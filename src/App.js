import React, {useState,} from 'react';
import Quote from './components/Quote/Quote';
import index from './components/index.css';
import {FaTwitter} from 'react-icons/fa';
//import { randomNumber } from './utils/randomNumber';
const url = 'https://type.fit/api/quotes';


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

        <button id='tweet-quote'><FaTwitter/></button>



    </div>
    );
}



export default App;