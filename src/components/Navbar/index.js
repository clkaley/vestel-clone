/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { Link, useParams } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaPushed } from "react-icons/fa";
import './index.css';


function Navbar() {
  const[categories,setCategories]=useState([]);
  const {categoryID}=useParams();
  const fetchCategory = async () => {
      const res = await axios
      .get("https://store.vrunibex.com/mobile2/mbProduct/CategoryList");
    return setCategories(res.data.Result.TreeList);
  };
  
    useEffect(() => {
      fetchCategory();
    },);

  return (
    <>
        <div className='right-content'>
            <Link className='link' to="/sepetim"><FaShoppingBasket style={{fontSize:"30px"}} /></Link>
            <Link  className='link'  to="/login"><FaHouseUser style={{fontSize:"30px"}}/></Link>
            <Link className='link' to="/products"><FaPushed style={{fontSize:"30px"}}/></Link>
        </div>
    <div className='container-nav'>
       
      <nav className='nav'>
    
          <div className='content'>
            {categories.map((category)=>{
            return (
                <ul className='category' key={category.ID}>
                  <li>
                        <Link  to={`/category/${category.ID}`}>{category.DisplayName}</Link>
                  </li>
                </ul>
              )
            })} 
          </div>
       
      
       
      </nav>
      </div>
      </>
  )
}

export default Navbar


{/* <div>
{categories.map((category,i=1)=>{
  return (
    <div key={i}>
            <Link to={category.DisplayName}>{category.DisplayName}</Link>
    </div>
  )
})} */}

  // const[categories,setCategories]=useState([]);

  // const fetchCategory = async () => {
  //     const res = await axios
  //     .get("https://store.vrunibex.com/mobile2/mbProduct/CategoryList");
  //   return setCategories(res.data.Result.TreeList);
  // };
  
  //   useEffect(() => {
  //     fetchCategory();
  //   },);