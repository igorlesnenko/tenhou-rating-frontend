import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../App';
import GameRow from '../../components/GameRow';
import RatingRow from '../../components/RatingRow';
import RatingTableHeader from '../../components/RatingTableHeader';
import RatingChart from '../../components/RatingChart';
import Helmet from 'react-helmet';
import { toGlobalId } from 'graphql-relay';
import { loadGames } from '../../actions'

function loadData(props) {
  props.loadGames({ id: props.params.id });
}

class Games extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { items, player } = this.props;

    let chartOptions = {
      responsive: true,
      animate: false,
      scales: {
        xAxes: [{
          display: false
        }]
      }
    };

    let labels = player.chartData ? player.chartData.map(d => '') : [];
    let chartData = {
      labels: labels,
      datasets: [{
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: player.chartData
      }]
    };

    return(
      <div>
        <Helmet title="Player statistics / Tenhou"/>
        <h1>
          { player.name } ({ Math.round(player.rating) })
        </h1>
        { player.chartData && player.chartData.length ? <RatingChart chartData={chartData} chartOptions={chartOptions} /> : "" }
        <table className="table">
          <thead>
          <tr>
            <th>Date</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
            <th>Fourth</th>
            <th>Rating</th>
          </tr>
          </thead>
          <tbody>
          { (items && items.length) ? items.map((item, index) => <GameRow key={item.id} index={index} player={player} item={item}></GameRow>) : <tr><td></td></tr> }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const player = state.entities.players[toGlobalId('player', ownProps.params.id)];
  if (!player) {
    return {
      items: [],
      player: {}
    }
  }

  player.fullRatingHistory = [];

  if (player.ratingHistory) {
    let history = [1500];
    player.ratingHistory.forEach((change, index) => {
      history[index + 1] = history[index] + change;
    });

    player.fullRatingHistory = history.reverse();
    player.ratingHistory.reverse();

    player.chartData = Array.prototype.slice.call(player.fullRatingHistory);
    player.chartData.reverse();
  }

  let games = [];
  if (player.games && player.games.edges) {
    games = player.games.edges.map(item => state.entities.games[item.node])
  }

  return {
    items: games,
    player
  };
}

//export default Players
export default connect(
  mapStateToProps,
  {
    loadGames
  }
)(Games)



