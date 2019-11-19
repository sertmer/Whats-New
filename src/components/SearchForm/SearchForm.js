import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <nav className='nav'>
      <h1>What's <span> New? </span></h1>
      <input 
        type='text' 
        placeholder='Search for news here'
        className='search-input'>
      </input>
      <button className='search-submit'>Search</button>
    </nav>
  )
}
export default SearchForm;