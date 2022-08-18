/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
function Header() {
  return (
    <>
    <div className='header-content'>
    <div className="header">
        <a href="#" className="logo btn">
            Vestel
        </a>
        <div className="form-container">
            <form action="">
                <input type="search" placeholder="Ne aramıştınız ?" id="search"/>
                <label htmlFor="search" ><i className="fas fa-search"></i></label>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Header