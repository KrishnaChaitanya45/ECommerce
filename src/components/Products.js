import React from 'react'
import { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'
import Loading from './Loading';
export const Products = (props) => {
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
   
   
    const fetchproducts = async() =>{
        setloading(true)

       let url = `https://fakestoreapi.com/products/${props.category}`
       let data = await fetch(url);
       let parsedData = await data.json();
       setproducts(parsedData);
        setloading(false)
    }
    useEffect(() => {
      fetchproducts();
    }, [])
     
    
  if(loading === true){
      <Loading />
  }else{

  }
    

  return (
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-12 mb-5">
        <h1 className="display-5 fw-bolder mb-0 text-center" style={{color:"#ff4081"}}> Our Products</h1>
        <hr />

            </div>
            <div className="row justify-content-center">
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    
                    <Link className="btn btn-outline-dark me-4" to="/products">All</Link>
                    <Link className="btn btn-outline-dark me-4" to="/products/men'sclothing">Mens Clothing</Link>
                    <Link className="btn btn-outline-dark me-4" to="/products/women'sclothing">Womens Clothing</Link>
                    <Link className="btn btn-outline-dark me-4" to="/products/jewelery">Jewelery</Link>
                    <Link className="btn btn-outline-dark me-4" to="/products/electronics">Electronics</Link>

                </div>
        
               
                   {!loading && products.map((product)=>{
                       return (
                       
                      
                       <div className="col md-3 mb-3" key={product.id}>
                       <div className="card h-100 text-center p-4 mx-2 my-2"  style={{width:"350px", height:"350px"}} key={product.id}>
                  <img src={product.image} className="card-img-top" alt="..." style={{height:"250px"}}/>
                                     <div className="card-body">
                               <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                          <p className="card-text mb-0 lead fw-bold">$ {product.price}</p>
                           <Link to={`/products/${product.id}`} className="btn btn-outline-dark my-2"> <i className="fa-solid fa-cart-circle-plus"></i> Add To Cart</Link>
                                             </div>
                                                         </div>
                    

                       </div>
                      
                       );


                        
                       

                           
                       
                    })}

            </div>
        </div>

    </div>
  )
}
