import React,{useState,useEffect} from 'react'
import axios from "axios"; 
function Product() {
    const[product,setProduct]=useState([]);

    const fetchProduct = async () => {
      const res = await axios
        .get("https://store.vrunibex.com/mobile2/mbProduct/ProductList?");
        return console.log(res.data.Result);
  };
  
    useEffect(() => {
      fetchProduct();
    },);
  return (
    <div>
        productssss
    </div>
  )
}

export default Product