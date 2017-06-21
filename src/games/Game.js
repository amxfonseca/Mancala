import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Game.css'
import drawStones from '../actions/games/draw-stones'



class Game extends PureComponent {
    render() {
  return (
    <div>
      <div className="board-wrapper">
      <div className="board">
          <button className="pit-score"> 0 </button>
          <div className="pit">
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
          </div>
      </div>

      <div className="board">
          <div className="pit">
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
              <button className="pit-action onchange"> 4 </button>
          </div>
          <button className="pit-score"> 0 </button>
      </div>
    </div>
    </div>

  );
}}


export default Game;
