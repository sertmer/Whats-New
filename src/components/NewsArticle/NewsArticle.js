import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className='article'>
      <img src={props.img}/>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <div>
        <p>Link to Article</p>
        <a href={props.url}></∫a>
      </div>
    </article>
  )
  }

export default NewsArticle;