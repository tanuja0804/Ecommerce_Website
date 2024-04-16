import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers</h1>
        <p>Subscribe to our NewsLetter and Stay Updated</p>
        <div>
        <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter