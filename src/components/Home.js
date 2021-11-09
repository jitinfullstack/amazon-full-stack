import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div class='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
          alt='header_banner'
        />

        <div className='home__row'>
          <Product
            id='2345678734'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'
            price={11.96}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id='1555671234'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.9}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            rating={4}
          />
          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>
          <Product
            id='1992371994'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.9}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}
          />
          <Product
            id='48778713434'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2s'
            rating={5}
          />
          <Product
            id='7865471234'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.99}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
            rating={4}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>
          <Product
            id='59999671234'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1049.9}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
            rating={4}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  )
}

export default Home
