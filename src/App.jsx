import { useState } from 'react'
import Div1 from './Components/Div1'
import Div2 from './Components/Div2'
import Div3 from './Components/Div3'
import Div4 from './Components/Div4'
import Footer from './Components/Footer'
import './App.css'
import './resp.css'

function App({ products }) {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };


  
  const sectionsData = [
    {
      image: 'img/shopmen.png',
      alt: 'Shop Men',
      buttonText: 'SHOP MEN'
    },
    {
      image: 'img/shop women.png',
      alt: 'Shop Women',
      buttonText: 'SHOP WOMEN'
    },
    {
      image: 'img/shop.png',
      alt: 'Shop Kids',
      buttonText: 'SHOP KIDS'
    }
  ];

  const productsData = [
    {
      image: 'img/FP-1.png',
      alt: 'Shop Men',
      title: 'Ted Baker Womens Light',
      brand: 'Gucci',
      price: '$70.00',
      originalPrice: '$120.00'
    },
    {
      image: 'img/FP-2.png',
      alt: 'Shop Women',
      title: 'Ted Baker Womens Light',
      brand: 'Gucci',
      price: '$70.00',
      originalPrice: '$120.00'
    },
    {
      image: 'img/FP-3.png',
      alt: 'Shop',
      title: 'Ted Baker Womens Light',
      brand: 'Gucci',
      price: '$70.00',
      originalPrice: '$120.00'
    },
    {
      image: 'img/FP-4.png',
      alt: 'Shop',
      title: 'Ted Baker Womens Light',
      brand: 'Gucci',
      price: '$70.00',
      originalPrice: '$120.00'
    }
  ];

  const blogsData = [
    {
      image: 'img/BN-1.png',
      alt: 'Shop Men',
      title: 'THE 15 SECRETS ABOUT FASHION PEOPLE',
      date: 'January 12, 2020',
      author: 'admin'
    },
    {
      image: 'img/BN-2.png',
      alt: 'Shop Women',
      title: 'THE 15 SECRETS ABOUT FASHION PEOPLE',
      date: 'January 13, 2020',
      author: 'admin'
    }
  ];

  return (
    <>
  <Div1 cart={cart}/>
  <div id="page-2">
    <Div2/>
    <Div3 sections={sectionsData} products={productsData} buttonText="Show More" onAddToCart={handleAddToCart}/>
    <Div4 blogs={blogsData}/>
  </div>
  <Footer/>
  


    </>
  )
}

export default App
