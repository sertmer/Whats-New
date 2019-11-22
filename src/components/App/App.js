import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

let local
let entertainment
let health
let science
let technology

class App extends Component {
  constructor() {
    super();
    this.state = {
       currentPage: []
    }
  }
  
  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(res => res.json())
      .then(newsData => this.assignData(newsData))
      .catch(err => console.log(err))
  }

  assignData = (data) => {
    local = data.local
    entertainment = data.entertainment
    health = data.health
    science = data.science
    technology = data.technology
    this.setState({currentPage: local})
  }

  changeCurrentPage = (type) => {
    this.setState({currentPage: type})
  }

  searchCurrentPage = (query) => {
    const filteredStories = this.state.currentPage.filter(story => {
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
