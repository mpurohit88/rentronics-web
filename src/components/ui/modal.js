import React, { useState } from 'react';
import Button from './button';
import Heading from './heading';
import close from "../../images/close.png";

import './modal.css';

export default function Modal({ setShowLoginPage }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="rm-login__signup-main remodal-wrapper">
        <div className="remodal remodal-is-initialized" id="modal">
          <a className="rm-login__main-close" onClick={() => setShowLoginPage(false)}><img src={close} /></a>
          {/* <Heading text="Modal Example" /> */}
          <h2>
            <button className={`${isLogin ? '' : 'active slideLeft'}`} onClick={() => setIsLogin(false)}>Sign Up</button>
            <button className={`${isLogin ? 'active slideLeft' : ''}`} onClick={() => setIsLogin(true)}>Log in</button>
          </h2>
          <div>
            <Button text="Close" onClickFn={() => setShowLoginPage(false)} />
          </div>
        </div>
      </div>
      <div className="modal-overlay" id="modal-overlay">
      </div>
    </>
  )
}