import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const API  = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

//1- importar react
//2- conseguir la API
//3- crear el diseno
//4- agregar los eventos
//5- estilos
//6- completar las historias de usuario


ReactDOM.render(
  <React.StrictMode>

    <App/>

  </React.StrictMode>,
  document.getElementById('root')
);

