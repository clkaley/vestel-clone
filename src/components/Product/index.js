import React,{useState,useEffect} from 'react'
import axios from "axios"; 
function Product() {
    const[product,setProduct]=useState([]);

    const fetchProduct = async () => {
      const res = await axios
      .get("https://store.vrunibex.com/mobile2/mbProduct/ProductList?");
    return console.log(res.data.Result.ProductList);
  };
  
    useEffect(() => {
      fetchProduct();
    },);
  return (
    <div>
        product
    </div>
  )
}

export default Product