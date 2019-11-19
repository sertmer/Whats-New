import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({data}) => {
  let articles = data.map(story => {
  let {id, headline, description, img} = story
    return (
      <NewsArticle 
        key={id} 
        headline={headline} 
        // description={description}
        // img={img}
      />
    )
  })
  return (
    <section>
      {articles}
    </section>
  )
}

export default NewsContainer;