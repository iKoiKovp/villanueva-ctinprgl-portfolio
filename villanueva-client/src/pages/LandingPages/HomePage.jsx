import Button from '../../components/Button';

const skills = [
  'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'REST APIs', 'HTML & CSS', 'Git', 'Figma', 'Responsive Design',
];

const projects = [
  {
    number: '01',
    title: 'Front-end Application',
    description: 'A responsive application experience designed around polished interfaces, practical user flows, and maintainable component architecture.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    number: '02',
    title: 'Portfolio Platform',
    description: 'A personal digital showcase built with modern front-end tools, clean component architecture, and accessible interaction.',
    tags: ['JavaScript', 'Tailwind CSS', 'React Router'],
  },
  {
    number: '03',
    title: 'System & API Design',
    description: 'An approach to transforming ideas into maintainable application systems with clear data structures and service boundaries.',
    tags: ['REST', 'API', 'Databases'],
  },
];

export const HomePage = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero__content">
          <p className="eyebrow">BSIT · Front-end Developer</p>
          <h1>Building useful digital experiences, one line at a time.</h1>
          <p className="hero-copy">
            I’m <strong>Rojge Jericho Villanueva</strong>, a BSIT student focused on creating responsive applications, thoughtful interfaces, and polished user experiences.
          </p>
          <div className="hero-actions">
            <Button to="/about" variant="primary" className="home-page-button">More about me</Button>
            <Button to="/projects" variant="primary" className="home-page-button">View projects</Button>
          </div>
          <div className="availability"><span /> Available for study and project collaboration</div>
        </div>

        <aside className="profile-card" aria-label="Developer profile summary">
          <div className="profile-card__top">
            <span className="profile-card__initials">RV</span>
          </div>
          <div className="profile-card__name">
            <p>Rojge Jericho</p>
            <h2>Villanueva</h2>
          </div>
          <div className="profile-card__details">
            <div><span>Year</span><strong>Fourth-year IT Mobile and Web Application student</strong></div>
            <div><span>Campus</span><strong>National University-Manila</strong></div>
            <div><span>Focus</span><strong>Front-end Development</strong></div>
          </div>
        </aside>
      </section>

      <section className="stats-strip" aria-label="Portfolio highlights">
        <div><strong>03</strong><span>Years of study</span></div>
        <div><strong>01</strong><span>Clear focus</span></div>
        <div><strong>∞</strong><span>Curiosity</span></div>
        <div><strong>100%</strong><span>Hands-on learning</span></div>
      </section>

      <section className="section-shell" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects built with purpose.</h2>
          </div>
          <p>My current work combines application development, interface design, and the fundamentals behind every reliable digital product.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card__number">{project.number}</div>
              <div className="project-card__art" aria-hidden="true"><span /><span /><span /></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell skills-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2>Skills I’m building with.</h2>
          </div>
          <p>From the interface to the server, I’m learning the complete stack needed to turn a concept into a working application.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <p className="eyebrow">Let’s build something</p>
          <h2>Have an idea worth developing?</h2>
          <p>I’m always open to thoughtful projects, technical collaboration, and learning opportunities.</p>
        </div>
        <Button to="/contact" variant="primary">Contact me</Button>
      </section>
    </div>
  );
};

export default HomePage;