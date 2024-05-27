import React from 'react'
import spinnerGif from "../assets/Spinner.gif"
const Spinner = () => {
  return (
    <>
    <img src={spinnerGif} alt="spinner" style={{width: "350px"}} className='d-block m-auto mt-5'/>
    </>
  )
}

export default Spinner