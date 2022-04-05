import React, {useState,} from 'react';
import Quote from './components/Quote/Quote';
import index from './components/index.css';
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

        <button onClick={getQuote}>Press here, get motivated</button>

    </div>
    );
}



export default App;