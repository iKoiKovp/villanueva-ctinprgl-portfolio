const projects = [
  {
    number: '01',
    title: 'Portfolio Web Project',
    description: 'A responsive personal portfolio built with React, React Router, and a custom component system. It presents my profile, skills, education, and selected work through accessible, interactive pages.',
    tags: ['React', 'JavaScript', 'CSS'],
    status: 'Completed',
    accent: '01',
  },
  {
    number: '02',
    title: 'Facebook-Like Mobile Recreation',
    description: 'A mobile-first social networking interface inspired by Facebook. The project recreates core feed, profile, messaging, and navigation experiences with responsive layouts and interactive components.',
    tags: ['React Native', 'JavaScript', 'Firebase'],
    status: 'Completed',
    accent: '02',
  },
  {
    number: '03',
    title: 'NU Bulldogs Exchange Web Store',
    description: 'A web store sample for the NU Bulldogs Exchange. It demonstrates product browsing, cart interactions, checkout flows, and a responsive storefront experience for student-focused merchandise.',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'Completed',
    accent: '03',
  },
];

export const ProjectListPage = () => {
  return (
    <div className="portfolio-page project-list-page">
      <section className="project-list-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Projects built to solve real problems.</h1>
        <p>
          A collection of applications, interfaces, and systems shaped through hands-on development and continuous learning.
        </p>
      </section>

      <section className="section-shell project-list-section">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Projects and ideas in progress.</h2>
          </div>
          <p>Each project is a step toward building dependable digital products from the interface down to the service layer.</p>
        </div>

        <div className="project-list-grid">
          {projects.map((project) => (
            <article className="project-list-card" key={project.number}>
              <div className="project-list-card__top">
                <span>{project.number}</span>
                <p>{project.status}</p>
              </div>
              <div className="project-list-card__visual" aria-hidden="true">
                <span>{project.accent}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectListPage;
