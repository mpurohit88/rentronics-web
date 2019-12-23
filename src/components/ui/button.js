import React from 'react';

export default function Button({ text, onClickFn }) {
  return (
    <button type="button" id="navAction" onClick={() => onClickFn()}
      className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75 gradient text-white">
      {text}
    </button>
  )
}