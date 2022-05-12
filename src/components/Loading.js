import React from 'react'
import loading from '../media/loading.gif'

export default function Loading() {
  return (
    <div className='container d-flex justfy-container-center'>
        <img src={loading} width="400rem"></img>
        <h1></h1>
    </div>
  )
}
