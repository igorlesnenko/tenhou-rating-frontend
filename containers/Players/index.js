import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../App';
import RatingRow from '../../components/RatingRow';
import RatingTableHeader from '../../components/RatingTableHeader';
import Helmet from 'react-helmet';
import moment from 'moment';

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
    const { items, isEmpty, isFetching } = this.props;

    return(
      <div className="container">
        <Helmet title="Rating / Tenhou"/>
        <div className="row">
          <div className="md-12">
            <table className="table table-bordered">
              <RatingTableHeader />
              <tbody>
              {
                isFetching
                  ? <tr><td>Loading...</td></tr>
                  : (isEmpty
                      ? <tr><td></td></tr>
                      : items.map((item, index) => <RatingRow key={item.id} index={index} item={item}></RatingRow>)
                    )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let props = {
    items: Object.values(state.entities.players),
    isFetching: state.entities.isFetching
  };

  props.isEmpty = !(props.items && props.items.length);

  // Hide players with last game more than 30 days ago
  if (!props.isEmpty) {
    props.items = props.items.filter(function(item) {
      return -moment(item.lastGame).diff(moment(), 'days') < 30
    })
  }

  return props;
}

export default connect(
  mapStateToProps,
  {
    loadPlayers
  }
)(Players)



