import React from 'react';

export default function Characters({ characters }) {
  return (
    <div>Characters:

      <div className='characters'>{characters}</div>

    </div>
  );
}