// import Films from './views/Films/Films';
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Main() {
  return (
    <div className='nameofstuff'>

      <h1>LOTR</h1>
      <NavLink exact to = {'/books'}>
        <h1>Books</h1>
      </NavLink>

      
      <NavLink exact to = {'/characters'}>
        <h1>Characters</h1>
      </NavLink>

      
      <NavLink exact to = {'/films'}>
        <h1>Films</h1>
      </NavLink>
    </div>
   
  );
}
