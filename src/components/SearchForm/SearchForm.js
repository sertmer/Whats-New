import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  
  handleClick = (query) => {
    this.props.searchCurrentPage(query)
    this.resetInputs()
  }
  
  resetInputs = () => {
    this.setState({search: ''})
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
        onClick={() => this.handleClick(this.state.search)}>
        Search
        </button>
    </nav>
  )}
}
export default SearchForm;