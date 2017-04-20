import React from 'react'
import ReactDOM from 'react-dom'

let Product = () => (
	<div className="container">
		<div className="section">

		  <div className="row">
		  	<div className="col s12 center">
	  			<h3>What I can do for You</h3>
	  		</div>

		    <div className="col s12 m4">
		      <div className="icon-block">
		        <h2 className="center light-blue-text"><i className="fa fa-pencil" aria-hidden="true"></i></h2>
		        <h5 className="center">1. Tell me what you desire!</h5>

		        <p className="light">Provide me with your vision of what you want your movie look like.</p>
		        <p className="light">And if you don't know? Doesn't matter. I will help you out and eventually, you won't believe what's possible!</p>
		      </div>
		    </div>

		    <div className="col s12 m4">
		      <div className="icon-block">
		        <h2 className="center light-blue-text"><i className="fa fa-scissors" aria-hidden="true"></i></h2>
		        <h5 className="center">2. Then I edit. It takes only a while.</h5>

		        <p className="light">Working on the movie always brings unexpected challenges and sparkles new ideas.</p>
		        <p className="light">Therefore, I create iteratively. I edit and send you the result. Afterwards, we discuss what needs to be changed and I edit again, until you are satisfied!</p>
		      </div>
		    </div>

		    <div className="col s12 m4">
		      <div className="icon-block">
		        <h2 className="center light-blue-text"><i className="fa fa-rocket" aria-hidden="true"></i></h2>
		        <h5 className="center">3. Finally help you release your movie!</h5>

		        <p className="light">Depending on intent of your movie, I will help you out with further promotion.</p>
		        <p className="light">I can create for you additional graphics, promotion material as well as help you release it on various platforms, including social media.</p>
		      </div>
		    </div>
		  </div>

		</div>
	</div>
)

export default Product