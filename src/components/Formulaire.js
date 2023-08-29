import "./Formulairestyle.css"
import React from 'react'

function Formulaire() {
  return (
    <div className="form">
        <form>
            <p>Full Name</p>
            <input type="text" className="input" />
            <p>Email</p>
            <input type="email" className="input" />
            <p>write something</p>
            <textarea className="input text" rows="10" />
            <button type="submit" className="btn">Send</button>
        </form>
        
    </div>
  )
}

export default Formulaire
