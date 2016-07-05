import React, { Component, PropTypes } from 'react'

export default class RatingTableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Place</th>
          <th>Nickname</th>
          <th>Rating</th>
          <th>Games played</th>
          <th>Average rank</th>
          <th>Total points</th>
          <th>1位率</th>
          <th>2位率</th>
          <th>3位率</th>
          <th>4位率</th>
          <th>Last game</th>
        </tr>
      </thead>
    )
  }
}
