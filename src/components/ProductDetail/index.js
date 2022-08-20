import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios"; 
function ProductDetail() {
    const[productDetail,setProductDetail]=useState([]);
    const {product_id}=useParams();
    const {productID}=useParams();
    const {categoryID}=useParams();
    console.log("productid ->",product_id);

    const fetchProductDetail = async () => {
        const res = await axios
        .get(`https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${product_id}`);
        return  console.log(res.data);
    };
    
    useEffect(() => {
        fetchProductDetail();
    });


  return (
    <div>
        product detail
    </div>
  )
}

export default ProductDetail