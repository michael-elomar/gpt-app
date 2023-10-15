import React from 'react';
import './article.css';

const Article = ({ image, date, text }) => (
    <div className="gpt3__article">
        <div className="gpt3__article-image">
            <img src={image} alt="blog_image" />
        </div>
        <div className="gpt3__article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
);

export default Article;