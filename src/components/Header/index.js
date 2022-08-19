/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <>
    <div className='header-content'>
    <div className="header">
        <a href="/" className="logo btn">
            Vestel
        </a>
        <div className="form-container">
            <form action="">
                <input type="search" placeholder="Ne aramıştınız ?" id="search"/>
                <label htmlFor="search" ><BsSearch/></label>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Header