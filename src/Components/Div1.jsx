import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = ({ cart }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
    <div className="logo">
      <img src="img/logo.png" alt="" />
      <div className="header">
        <ul className="sub-menu">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#shop">SHOP</a>
          </li>
          <li>
            <a href="#women">WOMEN</a>
          </li>
          <li>
            <a href="#men">MEN</a>
          </li>
          <li>
            <a href="#find">FIND STORES</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="right">
    <div className="cart">
      <img src="img/cart.png" alt="Cart" />
      <div>
        <span>{cart.length} items</span>
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
      <div className="search">
        <img src="img/search .png" alt="" />
      </div>
      <div className="burger" onClick={toggleMenu}>
            <img className="hamburger" src="img/icon.png" alt="" />
          </div>
    </div>
  </div>
  <div className="slider-img">
    <div className="social">
      <li>
        <a href="#">
          <img src="img/fb.png" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="img/tw.png" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="img/g+.png" alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="img/insta.png" alt="" />
        </a>
      </li>
      <li className="follow">
        <p>FOLLOW US</p>
      </li>
    </div>
    <div className="bg">
      {/* <img src="img/Slider Image.png" alt="" class="slider-img"> */}
      <div className="slider-img-txt">
        <div>
          <p>
            SUMMER <img className="prev-next" src="img/prev-next.png" alt="" />{" "}
            <br />
            COLLECTION
          </p>
        </div>
        <div className="slider-info-sale">
          <div className="slider-info">
            <div className="slider-text">
              <h1>01</h1>
              <h2>MEN'S WEAR</h2>
            </div>
            <div className="slider-icons">
              <img src="img/arrow-btn.png" alt="" />
              <img src="img/wishlist-btn.png" alt="" />
              <img src="img/share-btn.png" alt="" />
            </div>
            <div>
              <h3 className="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sed fermentum nibh, vel aliquet massa. Etiam in magna id risus
                lacinia luctus eget eu est.
              </h3>
            </div>
            <button>SHOP NOW</button>
          </div>
          <div className="sale">
            <img src="img/sale-image.png" alt="" className="sale-img" />
            <div className="sale-txt">
              <div className="sale-txt-2">
                <div className="sale-offer">
                  <h1>
                    SPECIAL OFFER
                    <br />
                    OF THE MONTH
                  </h1>
                </div>
                <div className="item-price">
                  <h3>Black long sleeve</h3>
                  <div className="sale-price">
                    <h1>$105</h1>
                    <h2>$65</h2>
                    <button>SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div className="main-timer">
                <div className="timer-box">
                  <h1>09</h1>
                  <h2>....</h2>
                  <h3>HOURS</h3>
                </div>
                <div className="timer-box">
                  <h1>56</h1>
                  <h2>....</h2>
                  <h3>MINUTES</h3>
                </div>
                <div className="timer-box">
                  <h1>11</h1>
                  <h2>....</h2>
                  <h3>SECONDS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Div1
