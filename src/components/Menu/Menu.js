import React from 'react';
import './Menu.css'
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'

const Menu = ({ changeCurrentPage }) => {
  return (
    <aside className='menu'>
      <h1>What's <span>New?</span></h1>
      <button 
        className='menu-btn' 
        onClick={() => changeCurrentPage(local)}>
        Local News
      </button>
      <button 
        className='menu-btn' 
        onClick={() => changeCurrentPage(technology)}>
        Technology
      </button>
      <button 
        className='menu-btn' 
        onClick={() => changeCurrentPage(entertainment)}>
        Entertainment
      </button>
      <button 
        className='menu-btn' 
        onClick={() => changeCurrentPage(science)}>
        Science
      </button>
      <button 
        className='menu-btn' 
        onClick={() => changeCurrentPage(health)}>
        Health
      </button>
    </aside>
  )
}

export default Menu;