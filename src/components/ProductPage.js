import React from 'react'
import { useParams } from 'react-router-dom'
import {useState , useEffect} from 'react'


export const ProductPage = () => {
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    const {id} = useParams();
    useEffect(() => {
        
    const fetchproducts = async() =>{
        setloading(true)

       let url = `https://fakestoreapi.com/products/${id}`
       let data = await fetch(url);
       let parsedData = await data.json();
       setproduct(parsedData);
        setloading(false)
    }
    fetchproducts()
    }, [])
    const Loading = () =>{
        return (
            <>
            Loading ....
            </>
        )
    }
    const ShowProducts = () =>{
        return(
            <>
            <div className="col-md-6 my-4">
            <img src={product.image} alt={product.title} height = "400rem" width="400rem"/>
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.title}</h4>
            </div>
            </>
        )
    }
  return (
    <div>
      <div className="container">
          <div className="row">
              { loading ? <Loading/> : <ShowProducts / >}
          </div>
      </div>
    </div>
  )
}
