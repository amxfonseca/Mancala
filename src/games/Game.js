import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Game.css'

class Game extends PureComponent {
    render() {
  return (
    <div>
      <div className="player">
        <div className="player-name">
          Player1
        </div>
        <button className="hole-score">
          0
        </button>
        <div className="hole">
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
        </div>
      </div>

        <div className="player">
          <div className="player-name">
            Player2
          </div>
          <div className="hole">
            <button className="hole-action onchangeleft"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-action onchange"> 4 </button>
            <button className="hole-score"> 0 </button>
          </div>
        </div>
      </div>
  );
}}


export default Game;
