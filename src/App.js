import React from 'react';
import Quotes from './components/Quotes';
import index from './components/index.css';

function App () {
    return (
    
    <div className='App'>

        <Quotes /> 

        <button>Generar nueva quote</button>

    </div>
    );
}
 
export default App;