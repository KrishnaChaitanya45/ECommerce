
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../media/Banner.png'
import banner2 from '../media/Banner2.png'

export const Home = () => {
  return (
      <>
      <div className="home my-2">
      <div className='hero d-flex justify-content-center '>
        <img id="banner1" src={banner} alt="" width="500rem"/>
        <img id="banner2" src={banner2}alt="" width="500rem"/>
    </div>
      </div>
   
        <div className="container d-flex flex-row justify-content-center" id="txt" style={{marginTop:"5rem"}}>
              <h1 className=' display-5 fw-bolder mb-0' style={{color:"#ff4081"}}> Get Products Delivered To Your Home In One Click</h1>
              
          </div>
          <div className="container py-5 my-5 d-flex justify-content-center" id="txt2">
          <Link className="btn-outlined-dark my-3" to="/products">Start Shopping  &rarr;</Link>

          </div>
          </>
  )

  // / my-4 px-4 d-flex flex-row justify-content-center/ 
}
