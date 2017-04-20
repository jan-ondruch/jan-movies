import React from 'react'
import ReactDOM from 'react-dom'

import headerImg from '../images/header.jpg'

$(document).ready(function(){
  $('.parallax').parallax();
});

let Header = () => (
	<div className="parallax-container">
		<div className="section no-pad-bot">
      <div className="container">
        <h1 className="header center teal-text white-text" style={{fontSize: '10vh', marginTop: '16vh', fontWeight: 300}}>Where is your story?</h1>
      </div>
    </div>
  	<div className="parallax">
  		<img src={headerImg} alt='header_image'></img>
  	</div>
  </div>
)

export default Header
