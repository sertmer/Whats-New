import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className='article'>
      <div>
        <img src={props.img}/>
      </div>
      <h1 className='article-title'>{props.headline}</h1>
      <p className='article-description'>{props.description}</p>
      <div className='link-div'>
        <a href={props.url}>Link to Article</a>
      </div>
    </article>
  )
  }

export default NewsArticle;