import React, { Component, PropTypes } from 'react'
import moment from 'moment';

export default class GameRow extends Component {
  render() {
    const { item, player, index } = this.props;

    return (
      <tr>
        <td>{moment(item.date).format('DD.MM.YYYY HH:mm')}</td>
        <td>{item.first}</td>
        <td>{item.second}</td>
        <td>{item.third}</td>
        <td>{item.fourth}</td>
        <td>{Math.round(player.fullRatingHistory[index])}
          ({player.ratingHistory[index] > 0 ? '+' : ''}{Math.round(player.ratingHistory[index])})</td>
      </tr>
    )
  }
}
