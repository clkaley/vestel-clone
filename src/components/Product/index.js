import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios"; 
import tv from "../../img/tv.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Product() {
    const[product,setProduct]=useState([]);
    const {productID}=useParams();
    const fetchProduct = async () => {
      const res = await axios
      .get(`https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${productID}`);
      return  setProduct(res.data.Result.ProductList);
  };
  
    useEffect(() => {
      fetchProduct();
    });
  return (
    <div >
      <div className="container">
        <div className="row g-4">
    {product.map((products)=>{
        return(
          <div key={products.ID} className="col " style={{margin:"20px auto"}} >
            <Card className=' h-100'  style={{ width: '15rem' }}>
              <a>
            <Card.Img variant="top" src={`${products.FirstProductImageURL==="" ? tv : products.FirstProductImageURL}`} />
              </a>
            <Card.Body>
            <Card.Title>{products.DisplayName}</Card.Title>
            <Link to={`/product/${products.ID}`}>
            <Button variant="danger">
              Ürün Detay
            </Button>
            </Link>
            </Card.Body>
            </Card>
          </div>
            
        )
    })}
    </div>
    </div>
    
    </div>
  )
}

export default Product