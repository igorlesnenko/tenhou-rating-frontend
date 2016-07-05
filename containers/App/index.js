import React, { Component, PropTypes } from 'react';

import 'sanitize.css/sanitize.css';
import Helmet from 'react-helmet';
import Header from '../../components/Header';

export default class App extends Component {
  render() {
    return(
      <div className="application">
        <Helmet title="Tenhou"/>
        <Header />
        {this.props.children}
      </div>
    )
  };
}