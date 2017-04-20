import React from 'react'
import ReactDOM from 'react-dom'

let Footer = () => (
	<footer className="page-footer white">

    <div className="container">
      <div className="row">
        <div className="col s12 center">
						<ul className="social-icons">
						  <li><a href="mailto:h.ondruch@seznam.cz" className="social-icon"> <i className="fa fa-envelope"></i></a></li>
						  <li><a href="https://www.facebook.com/h.ondruch" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
						  <li><a href="https://vimeo.com/janondruch/" className="social-icon"> <i className="fa fa-vimeo"></i></a></li>
						  <li><a href="https://www.youtube.com/channel/UCU6bEdSw92DYg936sdIixuA" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
						  <li><a href="https://www.instagram.com/janondruch/" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
						  <li><a href="https://cz.linkedin.com/in/jondruch" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
						</ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright white">
      <div className="col s12 center">
      	<span className="black-text text-lighten-4 center">© 2017 by Jan Ondruch</span>
      </div>
    </div>

  </footer>
)

export default Footer