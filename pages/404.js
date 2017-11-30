import React from 'react';
import Dot from '../lib/Dot';
import Layout from '../components/Layout';
import allImages from '../data/404s.json';
import Other404Raw from '../components/sidebars/Other404s';

const Other404s = ({ images, onClick = () => {} }) =>
  class Other404s extends React.Component {
    render() {
      return <Other404Raw onClick={onClick} images={images} />;
    }
  };

export default class Error extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawing: false,
      left: 0,
      top: 0,
    };
  }

  static getInitialProps() {
    const images = allImages.sort(() => Math.random() < 0.5).slice(0, 10);
    return { images };
  }

  handleMouseMove = event => {
    const { drawing, left, top } = this.state;
    if (drawing) {
      const x =
        event.clientX +
        (document.documentElement.scrollLeft || document.body.scrollLeft) -
        left;
      const y =
        event.clientY +
        (document.documentElement.scrollTop || document.body.scrollTop) -
        top;
      new Dot(this.ctx, x, y);
    }
  };

  handleMouseDown = event => {
    event.preventDefault();
    this.setState({ drawing: true });
  };

  handleMouseUp = event => {
    event.preventDefault();
    this.setState({ drawing: false });
  };

  handleClick = event => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(event.target, 0, 0);
  };

  handleDblClick = event => {
    event.preventDefault();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  componentDidMount() {
    const { canvas, mirror } = this;

    const ctx = (this.ctx = canvas.getContext('2d'));
    const comp = mirror.currentStyle
      ? mirror.currentStyle
      : getComputedStyle(mirror, null);

    let left = 0;
    let top = 0;
    let obj = mirror;

    do {
      left += obj.offsetLeft;
      top += obj.offsetTop;
    } while ((obj = obj.offsetParent));

    this.setState({ left, top });

    canvas.className = 'game';
    canvas.height = parseInt(comp.height, 10);
    canvas.width = parseInt(comp.width, 10);

    ctx.lineWidth = 9;
    ctx.moveTo(1, 1);
    ctx.fillStyle = '#ea6d00';
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Layout
        title="Uh oh, four oh four"
        sidebars={[
          Other404s({ images: this.props.images, onClick: this.handleClick }),
        ]}
      >
        <h1>4 Oh! 4 - Not Found</h1>
        <h4>
          Nope, looking around and couldn't find what you were looking for. If
          it wasn't important, how about you play in this box I've left you...
        </h4>
        <div ref={e => (this.mirror = e)} id="play">
          <canvas
            onMouseDown={this.handleMouseDown}
            onDoubleClick={this.handleDblClick}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            className="game"
            ref={e => (this.canvas = e)}
          />
        </div>
      </Layout>
    );
  }
}
