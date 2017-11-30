export default ({ line, cite, url = false }) => (
  <blockquote>
    <p>"{line}"</p>
    <cite>- {url ? <a href={url}>{cite}</a> : cite}</cite>
  </blockquote>
);
