import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, description, img, url}) => {
  return (
    <article className='article'>
      <div>
        <img src={img}/>
      </div>
      <h1 className='article-title'>{headline}</h1>
      <p className='article-description'>{description}</p>
      <div className='link-div'>
        <a href={url}>Link to Article</a>
      </div>
    </article>
  )
  }

export default NewsArticle;