import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      search: '',
    }
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
      <button 
        className='search-submit' 
        onClick={() => this.props.searchCurrentPage(this.state.search)}>
        Search
        </button>
    </nav>
  )}
}
export default SearchForm;