import React, { Component } from 'react'
import './header.css'
// import protrait from './images/bj_03.jpg'

class header extends Component {
  render () {
    return (
      <div className='header'>
        <div className="top">
          <div className="top_on clearfix">
            <a href=""><img src={require('./images/fl1_06.png')}/></a>
            <a href="index.html"><img src={require("./images/logo_03.png")}/></a>
            <div className="denglu">
              <img src={require("./images/ss_03.jpg")}/>
              <img src={require("./images/hs_03.png")}/>
              <a href="">登录 </a>
                <a href="">注册</a>
              </div>
          </div>
        </div>
      </div>
        )
      }
   }


      export default header
