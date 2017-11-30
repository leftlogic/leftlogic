import React from 'react';
import Error from './404';

export default class RootError extends React.Component {
  static getInitialProps(ctx) {
    return Error.getInitialProps(ctx);
  }

  render() {
    return <Error {...this.props} />;
  }
}
