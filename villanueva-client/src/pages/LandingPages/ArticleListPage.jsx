import Button from '../../components/Button.jsx';
import ArticleList from '../../components/ArticleList.jsx';
import articles from '../../data/article-content.js';

export const ArticleListPage = () => {
  return (
    <div className="portfolio-page article-list-page">
      <section className="article-list-hero">
        <p className="eyebrow">Articles</p>
        <h1>Notes on design, development, and learning.</h1>
        <p>Thoughtful observations from my journey through software development and digital product creation.</p>
        <Button to="/" variant="primary">Back to home</Button>
      </section>

      <section className="section-shell article-list-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Featured writing</p>
            <h2>Latest articles.</h2>
          </div>
          <p>Practical ideas, project lessons, and useful notes from the development process.</p>
        </div>
        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;