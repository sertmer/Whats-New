import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }
  
  searchCurrentPage = (query) => {
    const capitalQuery = query.toUpperCase()
    console.log(capitalQuery);
    this.state.currentPage.filter(story => {
      return story.title.contains(capitalQuery)
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() { 
    return (
    <nav className='nav'>
      <h1>What's <span> New? </span></h1>
      <input 
        name='search'
        value={this.state.search}
        type='text' 
        placeholder='Search for news here'
        className='search-input'
        onChange={this.handleChange}>
      </input>
      <button className='search-submit' onClick={() => this.searchCurrentPage(this.state.search)}>Search</button>
    </nav>
  )}
}
export default SearchForm;