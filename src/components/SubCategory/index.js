import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

function SubCategory() {
    const[categories,setCategories]=useState([]);

  const fetchSubCategory = async () => {
      const res = await axios
      .get("https://store.vrunibex.com/mobile2/mbProduct/CategoryList");
    return console.log(res.data.Result.TreeList[1].SubCategoryList.DisplayName);
  };
  
    useEffect(() => {
        fetchSubCategory();
    },);

  return (
   <>
   <Header/>
   <Navbar />
      

   <Footer/>
   </>
  )
}

export default SubCategory