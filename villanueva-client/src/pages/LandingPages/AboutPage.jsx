import Button from '../../components/Button';

const journey = [
  {
    period: '2024 — Present',
    role: 'BSIT Student',
    institution: 'National University · Manila Campus',
    description: 'Specializing in Mobile and Web Applications while continuing to build practical software development skills.',
  },
  {
    period: 'Learning path',
    role: 'Front-end development',
    institution: 'Responsive interfaces & component systems',
    description: 'Building a strong foundation in JavaScript, React, accessibility, responsive design, and modern interface development.',
  },
];

export const AboutPage = () => {
  return (
    <div className="portfolio-page about-page">
      <section className="about-hero">
        <div>
          <p className="eyebrow">About me</p>
          <h1>Curious by nature.<br />Intentional by design.</h1>
          <p className="hero-copy">
            I’m Rojge Jericho Villanueva, a student of BSIT with a focus on front-end development. I enjoy turning ideas into useful products and learning through hands-on interface development.
          </p>
          <div className="hero-actions">
            <Button to="/" variant="primary" className="about-page-button">Back to home</Button>
            <Button to="/projects" className="about-page-button">Explore projects</Button>
          </div>
        </div>
        <div className="about-portrait" aria-label="Rojge Villanueva initials">
          <span>RV</span>
          <div className="portrait-line portrait-line--one" />
          <div className="portrait-line portrait-line--two" />
          <p>Developer · Designer · Problem solver</p>
        </div>
      </section>

      <section className="about-story section-shell">
        <div className="story-intro">
          <p className="eyebrow">My approach</p>
          <h2>Technology should feel clear, useful, and human.</h2>
        </div>
        <div className="story-copy">
          <p>I like to work at the intersection of structure and creativity: understanding the problem, designing a clear path, and building the solution with maintainable code.</p>
          <p>My learning is hands-on and practical. I’m especially interested in responsive interfaces, application architecture, APIs, and the details that make software work well for the people using it.</p>
        </div>
      </section>

      <section className="section-shell journey-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">My journey</p>
            <h2>Learning with direction.</h2>
          </div>
          <p>Every stage is shaping the way I think, build, and collaborate.</p>
        </div>
        <div className="journey-list">
          {journey.map((item) => (
            <article className="journey-item" key={item.period}>
              <p className="journey-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="journey-institution">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell education-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Education background</p>
            <h2>Learning throughout the years.</h2>
          </div>
          <p>A progression of schools, programs, and specializations that shaped my academic journey.</p>
        </div>
        <div className="education-list">
          <div className="education-level">
            <p>Elementary</p>
            <article className="education-item">
              <p className="education-period">2011 — 2013</p>
              <div><h3>Holy Trinity Academy</h3></div>
            </article>
            <article className="education-item">
              <p className="education-period">2013 — 2014</p>
              <div><h3>Cordis Mariae School</h3></div>
            </article>
            <article className="education-item">
              <p className="education-period">2014 — 2017</p>
              <div><h3>Sto. Niño Parochial School</h3></div>
            </article>
          </div>
          <div className="education-level">
            <p>Junior High School</p>
            <article className="education-item">
              <p className="education-period">2017 — 2021</p>
              <div><h3>Quezon City Academy</h3></div>
            </article>
          </div>
          <div className="education-level">
            <p>Senior High School</p>
            <article className="education-item">
              <p className="education-period">2021 — 2023</p>
              <div><h3>UST Angelicum College</h3><p>TVL-ICT Programming</p></div>
            </article>
          </div>
          <div className="education-level">
            <p>College</p>
            <article className="education-item">
              <p className="education-period">2023 — 2024</p>
              <div><h3>FEU Institute of Technology</h3><p>BSIT specializing in Animation and Game Development</p></div>
            </article>
            <article className="education-item">
              <p className="education-period">2024 — 2027</p>
              <div><h3>National University-Manila</h3><p>BSIT specializing in Mobile and Web Applications</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell values-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">What guides me</p>
            <h2>Principles I bring to every project.</h2>
          </div>
        </div>
        <div className="values-grid">
          <article><span>01</span><h3>Learn continuously</h3><p>Good technology is built through curiosity, practice, and feedback.</p></article>
          <article><span>02</span><h3>Design for people</h3><p>Clear interfaces and useful systems begin with thoughtful user needs.</p></article>
          <article><span>03</span><h3>Build responsibly</h3><p>Clean structure, careful decisions, and maintainable code create better products.</p></article>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;