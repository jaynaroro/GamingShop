import React from 'react'
import { Link } from 'react-router-dom'
import homeBG from '../assets/homeBG.gif'

export default function Home(){
    return(
        <div className='home'>
         <Link to="towers">Explore our PC Models</Link>
        </div>
  
    )
}