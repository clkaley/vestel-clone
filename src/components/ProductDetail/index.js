import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios"; 
import tv from "../../img/tv.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function ProductDetail() {
    const[productDetail,setProductDetail]=useState([]);
    const {product_id}=useParams();
    //console.log("productid ->",product_id);

    const fetchProductDetail = async () => {
        const res = await axios
        .get(`https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${product_id}`);
        return  setProductDetail(res.data.Result);
    };
    
    useEffect(() => {
        fetchProductDetail();
    });


  return (
    <div >
    <div className="container">
        <div className="row g-4" style={{margin:"15px"}}>
     <Card className=' h-100'  style={{ width: '15rem' }}>
              <a>
            <Card.Img variant="top" src={`${productDetail.FirstProductImageURL==="" ? tv : productDetail.FirstProductImageURL}`} />
              </a>
            <Card.Body>
            <Card.Title>{productDetail.PageTitle}</Card.Title>
            <p>{productDetail.DisplayName}</p>
            <h2 className="text-danger my-5">{productDetail.ActualPriceToShowOnScreen} TL</h2>
            <Button variant="danger">
                  Sepete Ekle
                  </Button>
            </Card.Body>
         
            </Card>
 </div>
            </div>
    </div>
  )
}

export default ProductDetail