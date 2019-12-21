import React from 'react';

export default function Tile({ iconSrc, text }) {
  return (
    <li className="text-center">
      <a href="#" class="">
        <div class="rm-category__box"><img src={iconSrc} /><h3>{text}</h3></div></a>
    </li>
  )
}