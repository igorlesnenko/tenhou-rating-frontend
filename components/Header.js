import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-static-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Tenhou Rating</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/about">О рейтинге</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}