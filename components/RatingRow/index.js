import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import styles from './styles.css';
import { fromGlobalId } from 'graphql-relay';
import { Link } from 'react-router'

export default class RatingRow extends Component {
  render() {
    const { item, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td className={index == 0 ? styles.gold: ''}>
          <Link to={'/player/' + fromGlobalId(item.id).id}>{item.name}</Link>
        </td>
        <td>{item.rating}</td>
        <td>{item.gamesCount}</td>
        <td>{item.avgRank}</td>
        <td>{item.totalPoints > 0 ? '+': ''}{item.totalPoints}</td>
        <td>{item.firstRate}</td>
        <td>{item.secondRate}</td>
        <td>{item.thirdRate}</td>
        <td>{item.fourthRate}</td>
        <td>{moment(item.lastGame).format('DD.MM.YYYY HH:mm')}</td>
      </tr>
    )
  }
}
