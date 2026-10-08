import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <article key={article.name} className="article-card">
          <div className="article-card__image">
            <img src={article.thumbnail} alt={article.title} />
          </div>
          <p className="article-card__number">Article {String(index + 1).padStart(2, '0')}</p>
          <h3>{article.title}</h3>
          <p className="article-card__excerpt">{article.content[0].substring(0, 150)}...</p>
          <Link to={`/articles/${article.name}`}>
            <Button variant="primary" className="article-card__button">Read more</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;