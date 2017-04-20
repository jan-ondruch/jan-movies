import React from 'react'
import ReactDOM from 'react-dom'

$( document ).ready(function() {
  $(".button-collapse").sideNav();
});

let Navbar = () => (
  <div>
  	
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo black-text">Jan.Movies</a>
        <ul className="right hide-on-med-and-down">
          <li><a target="_blank" href="http://janondruch.com/">Personal website</a></li>
		      <li><a target="_blank" href="https://jan-ondruch.github.io/jan-dancing/">J.Dancing</a></li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li><a href="http://janondruch.com/">Personal website</a></li>
      		<li><a href="https://jan-ondruch.github.io/jan-dancing/">J.Dancing</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse black-text"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  
  </div>
)

export default Navbar