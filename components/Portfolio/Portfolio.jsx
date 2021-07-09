import projects from "./projects";

console.log(projects);
const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <h4>Featured Projects</h4>
      <p>
        Here are some of the selected projects I have been involved in on over
        time.
      </p>
      <div className="project-card-container">
        {projects.slice(0, 3).map((project, idx) => {
          return (
            <div className="left-card" key={idx}>
              <div className="card-item-one">
                <img
                  src={project.projectImage}
                  alt={`${project.projectImage} website screenshot mockup`}
                />
              </div>
              <div className="card-info">
                <h5>{project.projectName}</h5>
                <p>{project.projectDescription}</p>
                <div className="tags">
                  <ul className="tech__stack flex">
                    {project.technologies.map((tech) => {
                      return <li>{tech}</li>;
                    })}
                  </ul>
                </div>
                <div className="project-links flex">
                  <a href={project.liveLink} target="_blanck" className="flex">
                    <span>View project</span>
                  </a>
                  {project.githubLink !== "" ? (
                    <a href={project.githubLink} target="_blanck">
                      <img
                        src="/images/github.svg"
                        alt="github icon link to project"
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a className="link-item-button" href="/projects">
        View Projects
      </a>
    </section>
  );
};

export default Portfolio;
