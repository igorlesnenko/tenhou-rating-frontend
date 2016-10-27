import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../App';
import Helmet from 'react-helmet';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return(
      <div className="container-fluid">
        <Helmet title="About / Tenhou 6628"/>
        <div className="row">
          <div className="col-md-12">
            <h1>О рейтинге</h1>

            <p>Рейтинг обновляется примерно раз в 20 минут.</p>

            <p>В рейтинге по умолчанию скрыты игроки с последней игрой более месяца назад</p>

            <p>Начальное значение рейтинга — 1500.</p>
            <p>В рейтинге учитываются ханчаны любого типа.</p>
            <p>Формула расчета:</p>
            <p>изменение = k * (база + (средний рейтинг стола - рейтинг игрока) / 40)</p>
            <p>k = 1 - (число игр * 0.002), если число игр меньше 400</p>
            <p>k = 0.2, если число игр >=400</p>
            <p>Значения базы: +30, +10, -10, -30</p>

            <p>Рейтинг является вариантом представления открытых данных хранящихся на серверах tenhou.net</p>
            <p>Невозможны изменения которые будут противоречить исходной информации — отмена игр, переименование ников и так далее.</p>
          </div>
        </div>
      </div>
    )
  }
}


