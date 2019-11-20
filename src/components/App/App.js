import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
       currentPage: local
    }
  }
  
  changeCurrentPage = (type) => {
    this.setState({currentPage: type})
  }

  searchCurrentPage = (query) => {
    const filteredStories = this.state.currentPage.filter(story => {
      console.log(story);
      return story.headline.includes(query)
    })
    this.setState({currentPage: filteredStories})
  }

  render() {
    return (
      <div className="app">
        <SearchForm searchCurrentPage={this.searchCurrentPage}/>
        <main>
        <Menu 
          changeCurrentPage={this.changeCurrentPage}
          local={local}
          entertainment={entertainment}
          health={health}
          science={science}
          technology={technology}/>
        <NewsContainer data={this.state.currentPage}/>
        </main>
      </div>
    );
  }
}

export default App;
