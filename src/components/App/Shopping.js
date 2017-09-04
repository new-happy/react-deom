import React, { Component } from 'react'
import './app.css'
import Header from '../Header/Header'
import Main from '../Main/Main1'
import Footer from '../Footer/Footer'

class APP extends Component {
  render () {
    return (
      <div className='warp'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
