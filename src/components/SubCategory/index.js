/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css'
import tv from "../../img/tv.jpg"
import { Link } from "react-router-dom"
function SubCategory() {
    const[subcategories,setSubCategories]=useState([]);
    const {categoryID}=useParams();
   // console.log("categoryId",categoryID);

  const fetchSubCategory = async () => {
      const res = await axios
      .get(`https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${categoryID}`);
     
    return  setSubCategories(res.data.Result.TopCategory.SubCategoryList);
  };
      useEffect(() => {
        fetchSubCategory();
      
    });

  return (
   <>
      <div>
        <div className="container">
          <div className="row">
                {subcategories.map((subpro)=>{
              return(
                <div key={subpro.ID} className="col-lg-4 col-md-6 col-xxl-2 col-sm-12   category-content" style={{margin:"20px auto"}} >
                  <Card  style={{ width: '15rem' }}>
                    <a>
                  <Card.Img variant="top" src={tv} />
                    </a>
                  <Card.Body>
                  <Card.Title>{subpro.DisplayName}</Card.Title>
                  <Link to={`/category/${subpro.ID}`}>
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
   </>
  )
}

export default SubCategory