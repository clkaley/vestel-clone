import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css'
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


  return (
    <div >

      <div className="container">
        <div className="row">
          <div className="col">
    {categories.map((category)=>{
        return(
          <div key={category.ID} className="category-content" >
            <Card  style={{ width: '15rem' }}>
              <a href="/">
            <Card.Img variant="top" src={category.ImageUri} />
              </a>
            <Card.Body>
            <Card.Title>{category.DisplayName}</Card.Title>
            <Button variant="danger">DETAY</Button>
            </Card.Body>
            </Card>
          </div>
            
        )
    })}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Category