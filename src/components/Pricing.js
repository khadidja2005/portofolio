import { Link } from "react-router-dom"
import "./Pricingstyle.css"
import React from 'react'

function Pricing() {
  return (
    <div className="pricing">
        <div className="card_container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <h1>$ 100</h1>
                <p>-3Days-</p>
                <p>-Features-</p>
                <p>5 pages</p>
                <p>-Responsive Design-</p>
                <Link className="btn" to='/contact'>Purchase now</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <h1>$ 300</h1>
                <p>-10Days-</p>
                <p>-8 Pages-</p>
                <p>-Features-</p>
                <p>-Responsive Design-</p>
                <Link className="btn" to='/contact'>Purchase now</Link>
            </div>
            <div className="card">
                <h3>- Pro -</h3>
                <span className="bar"></span>
                <h1>$ 500</h1>
                <p>-20 Days-</p>
                <p>-20 pages-</p>
                <p>-Features-</p>
                <p>-animated design-</p>
                <Link className="btn" to='/contact'>Purchase now</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing
