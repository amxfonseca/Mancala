import React, { PureComponent } from 'react'
import JoinGameDialog from './JoinGameDialog'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import './Game.css'
import drawStones from '../actions/games/draw-stones'
import Pit from './Pit'
import ScorePit from './ScorePit'


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
    const { game, score } = this.props

    return (



      <div className="board-wrapper">


        <div className="board-left">
        <ScorePit />
        </div>
        <div className="board-players">
          <div className="board-upper">

            <Pit />
            <Pit />
            <Pit />
            <Pit />
            <Pit />
            <Pit />
            </div>
          <div className="board-downer">
          <Pit />
          <Pit />
          <Pit />
            <Pit />
            <Pit />
            <Pit />
          </div>
        </div>
        <div className="board-right">

          <ScorePit />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
    game,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
  drawStones,
})(Game)
