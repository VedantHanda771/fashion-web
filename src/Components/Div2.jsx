import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
import '../resp.css'
const Div2 = ({ coachImages, coachTexts }) => {
  return (
    <>
    <div id='shop' className="section-2">
      <ul>
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">spring-summer</a>
        </li>
        <li>
          <a href="">sweatshirt</a>
        </li>
        <li>
          <a href="">sneakers</a>
        </li>
        <li>
          <a href="">gadgets</a>
        </li>
        <li>
          <a href="">outdoors</a>
        </li>
      </ul>
      <div className="grid-container">
        <div className="grid-item a">
          <img src="img/shoes1.png" alt="" />
          <div className="grid-text-absolute-a">
            <h1>
              BUY 2 GET
              <br />
              UP 50% OFF
            </h1>
          </div>
        </div>
        <div className="grid-item b">
          <img src="img/whitedress.png" alt="" />
          <img className="new" src="img/new.png" alt="" />
          <div className="grid-text-absolute-b">
            <h2>Winter Jacket</h2>
            <h1>
              VINTAGE LOOK
              <br />
              FOR WOMEN
            </h1>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="grid-item c">
          <img src="img/black hoodie.png" alt="" />
          <div className="grid-text-absolute-c">
            <h2>Winter Jacket</h2>
            <h1>
              FASHION
              <br />
              FOR MEN
            </h1>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="grid-item d">
          <img src="img/handbag.png" alt="" />
        </div>
        <div className="grid-item e">
          <img src="img/glasses.png" alt="" />
          <img className="new" src="img/new.png" alt="" />
          <div className="grid-text-absolute-e">
            <h1>40% OFF ON SUNGLASSES</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="banner">
      <img src="img/offer-styles-bg.png" alt="" />
      <div className="banner-txt">
        <h1>WE OFFER BRAND NEW STYLES</h1>
        <h2>SIGN UP NOW AND GET 50% OFF</h2>
        <button>SEE FULLCOLLECTION</button>
      </div>
    </div>



    </>
  )
}

export default Div2
