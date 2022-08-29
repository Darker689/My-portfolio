import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './price.css'


const Peice = () => {
  return (
    <div className='pricing'>
      <div className="card_container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/contact' className='btn'>
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className='bar'></span>
          <p className='btc'>$ 200</p>
          <p>- 4 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/contact' className='btn'>
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$ 100</p>
          <p>- 6 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/contact' className='btn'>
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Peice