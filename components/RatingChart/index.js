import React, { Component, PropTypes } from 'react'
import { fromGlobalId } from 'graphql-relay';
import { Link } from 'react-router'

import Chart from 'react-chartjs';
let LineChart = Chart.Line;

export default class RatingChart extends Component {
  render() {
    const { chartData, chartOptions } = this.props;

    return (
      <LineChart data={chartData} options={chartOptions} width="1200" height="400" />
    )
  }
}
