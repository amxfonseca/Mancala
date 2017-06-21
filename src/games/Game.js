import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Game.css'

class Game extends PureComponent {
    render() {
  return (
    <div>
      <div className="board-wrapper">
      <div className="board">
          <div className="hole">
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
          </div>
      </div>

      <div className="board">
          <div className="hole">
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
              <button className="hole-action onchange"> 4 </button>
          </div>
      </div>
    </div>
    </div>

  );
}}


export default Game;
