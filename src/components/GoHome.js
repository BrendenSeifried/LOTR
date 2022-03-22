import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GoHome() {
  return (
    <div>
      <NavLink exact to = {'/'}>
        <h1>Home</h1>
      </NavLink>
    </div>
  );
}
