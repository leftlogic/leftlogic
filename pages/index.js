import Layout from '../components/Layout';
import projects from '../data/projects.json';

export const Project = ({ name, link, fullname, about }) => (
  <div className="section" id={name}>
    <div className="inner">
      <div className="info">
        <h2>{fullname}</h2>
        <p>{about}</p>
        <a href={link}>View project &rarr;</a>
      </div>
      <a href={link}>
        <img src={`/static/img/projects/${name}_screenshot.jpg`} />
      </a>
      <div className="clearfix" />
    </div>
  </div>
);

export default () => {
  return (
    <Layout heading="Specialists in JavaScript Development">
      <div className="heading">
        <div className="heading_inner">Our Projects</div>
      </div>
      <div id="projects">
        {projects.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </Layout>
  );
};
