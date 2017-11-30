const Team = ({
  name,
  twitter,
  github,
  blog,
  fullname,
  title,
  credit = 'Selfie!',
  about,
  former = false,
}) => (
  <li id={name}>
    <img
      className="about_avatar"
      src={`/static/img/avatars/${name}.jpg`}
      title={credit}
    />
    <div className="about_content">
      <h2>{fullname}</h2>
      <h4>{title}</h4>
      <div className="social">
        {twitter && (
          <a href={`http://twitter.com/${twitter}`} className="icon-twitter">
            {twitter}
          </a>
        )}
        {github && (
          <a href={`https://github.com/${github}`} className="icon-github">
            {github}
          </a>
        )}
        {blog && (
          <a href={blog} className="icon-blog">
            {blog.replace(/^http.?:../, '')}
          </a>
        )}
      </div>
      {!former && <p>{about}</p>}
    </div>
  </li>
);

export default Team;
