import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => {
    const { urlToImage, url, title, description, source } = article;
    return (
        <div className="col s12 m6 l4">
            <div className="card">

                {
                    urlToImage && 
                    <div className="card-image">
                        <img src={urlToImage} alt={title}/>
                        <span className="card-title">{source.name}</span>
                    </div>
                }

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="waves-effect waves-ligth btn">Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;