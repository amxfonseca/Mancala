import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Game.css'
import drawStones from '../actions/games/draw-stones'
import Pit from './Pit'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import getCurrentGame from '../actions/games/get'


class Game extends PureComponent {

  componentWillMount() {
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gameId } = this.props.params

    if (!game) fetchGames()
    getCurrentGame(gameId)
    if (!subscribed) subscribeToGames()
  }

  drawStones(pitIndex) {
    const { game } = this.props

    return () => {
      this.props.drawStones(game._id, pitIndex)
    }
  }

  renderPit(pit, index) {

    return <Pit
      key={index} { ...pit }
      index={index}
      onDraw={this.drawStones(index).bind(this)} />
  }


  render() {
    const game = this.props

    return (
      <div className="board-wrapper">
        <div className="board">

        <Pit />

        {game.pits.map(this.renderPit.bind(this))}
        </div>
      </div>
    )
  }
}


export default Game
