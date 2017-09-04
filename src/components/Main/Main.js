import React, { Component } from 'react'
import './main.css'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <div className="section_on clearfix">
          <div className="top">
            <div className="hed clearfix">
              <h1>已成功加入购物车！</h1>
            </div>
            <div className="shangpin clearfix">
              <img src={require("./images/shopping_03.jpg")}/>
              <h2>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h2>
              <div className="guige">
                <span>款式：iPhone 5</span>
                <span>尺码：XL</span>
                <span>数量：xl</span>
              </div>
              <a href="shopping.html">去购物车结算</a>
              <a href="">返回</a>
            </div>
            <div className="xiabian clearfix">
              <span>您可能还需要</span>
              <span></span>
              <div className="clearfix">
                <img src={require("./images/shopping1_14.jpg")}/>
                <div className="clearfix">
                  <span>龙之谷六周年限定礼包
                    <br></br>大Boss冰龙款...</span>
                  <span>￥88.00</span>
                  <a href="#"></a>
                </div>
              </div>
              <div className="clearfix">
                <img src={require("./images/shopping1_14.jpg")}/>
                <div className="clearfix">
                  <span>龙之谷六周年限定礼包
                    <br></br>大Boss冰龙款...</span>
                  <span>￥88.00</span>
                  <a href="#"></a>
                </div>
              </div>
              <div className="clearfix">
                <img src={require("./images/shopping1_14.jpg")}/>
                <div className="clearfix">
                  <span>龙之谷六周年限定礼包
                    <br></br>大Boss冰龙款...</span>
                  <span>￥88.00</span>
                  <a href="#"></a>
                </div>
              </div>
              <div className="clearfix">
                <img src={require("./images/shopping1_14.jpg")}/>
                <div className="clearfix">
                  <span>龙之谷六周年限定礼包
                    <br></br>大Boss冰龙款...</span>
                  <span>￥88.00</span>
                  <a href="#"></a>
                </div>
              </div>
              <div className="clearfix">
                <img src={require("./images/shopping1_14.jpg")}/>
                <div className="clearfix">
                  <span>龙之谷六周年限定礼包
                    <br></br>大Boss冰龙款...</span>
                  <span>￥88.00</span>
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
