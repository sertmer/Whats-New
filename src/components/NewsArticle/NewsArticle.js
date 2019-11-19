import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
    </div>
  )
  }

export default NewsArticle;