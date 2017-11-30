export default ({ images = [], onClick }) => (
  <div className="sidebar_section">
    <h6>My favourite 404s</h6>
    <p>Here's a selection of 404 images others have left</p>
    <ul id="others">
      {images.map(img => (
        <li key={img}>
          <img onClick={onClick} width="105" src={`/static/img/404/${img}`} />
        </li>
      ))}
    </ul>
  </div>
);
