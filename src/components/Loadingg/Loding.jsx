import React from 'react'
import Img from '../../assets/image/Ripple-1s-429px.gif'
import '../../components/Loadingg/style.css'

export default function Loding() {
  return (
    <div className='loading'>
        <img src={Img} alt='loading'></img>
    </div>
  )
}
