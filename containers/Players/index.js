import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../App';
import RatingRow from '../../components/RatingRow';
import RatingTableHeader from '../../components/RatingTableHeader';
import Helmet from 'react-helmet';

import { loadPlayers } from '../../actions'

function loadData(props) {
  props.loadPlayers();
}

class Players extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return(
      <div className="container">
        <Helmet title="Rating / Tenhou"/>
        <div className="row">
          <div className="md-12">
            <table className="table table-bordered">
              <RatingTableHeader />
              <tbody>
              { (items && items.length) ? items.map((item, index) => <RatingRow key={item.id} index={index} item={item}></RatingRow>) : <tr><td></td></tr> }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: Object.values(state.entities.players)
  };
}

export default connect(
  mapStateToProps,
  {
    loadPlayers
  }
)(Players)



