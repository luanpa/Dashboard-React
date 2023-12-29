import React from 'react'
import "./body.css"
import Top from './Top Section/top'
import Listing from './Listing Section/Listing'
import Activity from './Active Section/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
    <Top/>

    <div className='buttom flex'>
      <Listing/>
      <Activity/>
    </div>
    </div>
  )
}

export default Body