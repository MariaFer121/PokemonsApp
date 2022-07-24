import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './Root/Root';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Combat from './Combat/Combat';
import List from './List/List';
import Pokemon from './Pokemon/Pokemon';
import Historial from './Historial/Historial';
import '@fontsource/roboto'
import './index.css'
//Import del elemento de imagen 
import Imagen from './img/img';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Imagen/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path='/combat' element={<Combat />} />
          <Route path='/pokedex' element={<List />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/historial' element={<Historial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
