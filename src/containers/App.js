import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import Product from '../components/Product'
import Showcase from '../components/Showcase'

export default class App extends React.Component {
	render() {
    return (
      <div>
      	<Navbar />
      	<Header />
      	<Info />
      	<Product />
      	<Showcase />
      	<Footer />
      </div>
     )
  }
}