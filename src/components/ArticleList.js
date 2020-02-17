import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
    <div className="row">
        {articles.map(article => <Article key={article.url} article={article} />)}
    </div>
);

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default ArticleList;