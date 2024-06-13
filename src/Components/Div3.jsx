import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'
const Div3 = ({ sections, products, buttonText ,onAddToCart }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [addedToCartIndices, setAddedToCartIndices] = useState([]);

  const handleProductClick = (index) => {
    setSelectedProductIndex(index);
  };

  const handleAddToCart = (product, index) => {
    onAddToCart(product);
    setAddedToCartIndices([...addedToCartIndices, index]);
  };


  return (
    <>
   <div id='women' className="section-3">
      <div  className="headings">
        <h1>PRODUCT TYPES</h1>
        <h2>up to 30% discount</h2>
      </div>
      <div className="photo-section">
      <div>
        {sections.map((section, index) => (
          <div className="photo-sub-section" key={index}>
            <img
              className="image span-1"
              src={section.image}
              alt={section.alt}
            />
            <button className="photo-section-btn">{section.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div id='men' className="section-4">
      <div className="headings">
        <h1>FEATURED PRODUCTS</h1>
      </div>
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
      <div className="photo-section">
      <div>
        {products.map((product, index) => (
          <div
            className="photo-sub-section"
            key={index}
            onClick={() => handleProductClick(index)}
          >
            <img className="image span-1" src={product.image} alt={product.alt} />
            <div className="photo-sub-section-txt">
              <h1>{product.title}</h1>
              <h3>{product.brand}</h3>
              <div className="photo-sub-section-txt-price">
                <h4>{product.price}</h4>
                <h5>{product.originalPrice}</h5>
              </div>
              {selectedProductIndex === index && !addedToCartIndices.includes(index) && (
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent div click event
                    handleAddToCart(product, index);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="SM">Show More</button>
    </div>
    </div>

    </>
  )
}

export default Div3
