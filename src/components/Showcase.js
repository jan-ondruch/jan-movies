import React from 'react'
import ReactDOM from 'react-dom'

let Showcase = () => (
	<div className="container">	
		<div className="row">	
			<div className="col s12 center">
				<h3 className="thin">Showcase</h3>
				<h5 style={{marginBottom: 18}}>Take your time, learn back & enjoy.</h5>
			</div>
			<div className="col m12 l6 s12">
				<div className="video-container">
				  <iframe src="https://player.vimeo.com/video/158604505" frameBorder="0"></iframe>
				</div>
			</div>
			<div className="col m12 l6 s12">
				<div className="video-container">
				  <iframe src="https://player.vimeo.com/video/197226308" frameBorder="0"></iframe>
				</div>
			</div>
			<div className="col m12 l6 s12">
				<div className="video-container">
					<iframe src="https://player.vimeo.com/video/177912263" frameBorder="0"></iframe>
				</div>
			</div>
			<div className="col m12 l6 s12">
				<div className="video-container">
				  <iframe src="https://player.vimeo.com/video/100841943" frameBorder="0"></iframe>
				</div>
			</div>
		</div>

		<div className="col s12 center">
			<br></br>
	  	<h4>Watch more on</h4>
	  	<div className="row">
	  		<div className="col s12 center">
	  			<a href="https://vimeo.com/janondruch/" className="waves-effect waves-light btn" style={{color: '#039be5', margin: 4, backgroundColor: '#ffffff'}}>Vimeo</a>
	  			<a href="https://www.youtube.com/channel/UCU6bEdSw92DYg936sdIixuA" className="waves-effect waves-light btn" style={{color: '#039be5', margin: 4, backgroundColor: '#ffffff'}}>Youtube</a>
	  		</div>
	  	</div>
	  	<p style={{color: 'gray'}}>sidenote: not all of my work is featured due to confidentiality.</p>
	  	<br></br>
	  	<hr></hr>
	  </div>

  </div>
)

export default Showcase