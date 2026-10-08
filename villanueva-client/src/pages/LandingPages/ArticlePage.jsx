import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import articles from '../../data/article-content.js';

export function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return (
      <div className="portfolio-page article-page article-page--not-found">
        <section className="article-detail-hero">
          <p className="eyebrow">404</p>
          <h1>Article not found</h1>
          <p>The article you’re looking for may have moved or no longer exists.</p>
          <Button to="/articles" variant="primary" className="article-page-button">Back to articles</Button>
        </section>
      </div>
    );
  }

  return (
    <div className="portfolio-page article-page">
      <section className="article-detail-hero">
        <Button to="/articles" variant="primary" className="article-page-button">Back to articles</Button>
        <p className="eyebrow">Article · {article.name.replaceAll('-', ' ')}</p>
        <h1>{article.title}</h1>
        <p className="article-meta">{article.name.replaceAll('-', ' ')}</p>
      </section>

      <section className="article-content-shell">
        <div className="article-image-wrap">
          <img src={article.thumbnail} alt={article.title} />
        </div>
        <article className="article-content">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
        <Button to="/articles" variant="primary" className="article-page-button">Back to articles</Button>
      </section>
    </div>
  );
}

export default ArticlePage;