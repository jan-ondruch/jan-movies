import React from 'react'
import ReactDOM from 'react-dom'

let Info = () => (
	<div>

		<div className="container">
			<div className="section">

			  <div className="row">
			    <div className="col s12 center">
			      <h3>Hi. I am Jan and I make movies!</h3>
			      <h5 className="center-align light">I have been creating movies since 2009. Now is 2017. After 8 years doing something you love, great knowledge and results are inevitable.</h5>			      
			    	<br></br>
			    	<a className="waves-effect waves-light btn-large" href="http://janondruch.com/filmmaking/" style={{color: '#039be5', margin: 4, backgroundColor: '#ffffff'}}>Find Out More</a>
			    </div>
			  </div>
			</div>
		</div>

		<div className="parallax-container valign-wrapper" style={{height: 400, paddingTop: '16vh', paddingBottom: '16vh'}}>
		    <div className="container">
		      <div className="row">
		        <h3 className="header col s12 center teal-text text-lighten-5">My movie making story in a nutshell.</h3>
		        <h5 className="center-align teal-text text-lighten-5">In the beginning gaming videos, later I started editing travelling movies and most lately I added promotion videos. Expansion of skills constantly continues.</h5>
		      </div>
		  </div>
		  <div className="parallax" style={{'backgroundColor': '#212121'}}></div>
		</div>

	</div>
)

export default Info