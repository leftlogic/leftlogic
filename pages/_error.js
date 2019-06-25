import React from 'react';
import Error from './404';

export default class RootError extends React.Component {
  static getInitialProps(ctx) {
    if (Error.getInitialProps) return Error.getInitialProps(ctx);
    return {};
  }

  render() {
    return <Error {...this.props} />;
  }
}
