import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css'
import tv from "../../img/tv.jpg"
import { Link, useParams } from "react-router-dom"
function Category() {

    const[categories,setCategories]=useState([]);

    const fetchCategory = async () => {
        const res = await axios
        .get("https://store.vrunibex.com/mobile2/mbProduct/CategoryList");
      return setCategories(res.data.Result.TreeList);
    };
    
      useEffect(() => {
        fetchCategory();
      },);

      // {`${category.DisplayName==="BEYAZ EŞYA" ? 'BEYAZ EŞYA' : 'hello' }`}
      // {category.ImageUri}
  return (
    <div >
      <div className="container">
        <div className="row">
    {categories.map((category)=>{
        return(
          <div key={category.ID} className="col-lg-4 col-md-6 col-xxl-3 col-sm-12   category-content" style={{margin:"20px auto"}} >
            <Card  style={{ width: '15rem' }}>
              <a>
            <Card.Img variant="top" src={`${category.ImageUri==="" ? tv : category.ImageUri}`} />
              </a>
            <Card.Body>
            <Card.Title>{category.DisplayName}</Card.Title>
            <Link to={`/category/${category.ID}`}>
            <Button variant="danger">
              Detay
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

export default Category