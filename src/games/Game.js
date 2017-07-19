import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import './Game.css'
import Pit from './Pit'


class Game extends PureComponent {

  componentWillMount() {
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
    const { gameId } = this.props.params

    if (!game) fetchGames()
    getCurrentGame(gameId)
    if (!subscribed) subscribeToGames()
  }

  renderPit(pit, index) {
    return <Pit key={index} { ...pit } />
  }

  renderScore(ScorePit, index) {
    return <ScorePit key={index} { ...ScorePit } />
  }

  render() {

    const { game }  = this.props
    console.log("game:", game)

    if (!game) return null


    const sidePlayer1 = game.pits.filter((pit) => pit.belongsToOwner === true)
    const sidePlayer2 = game.pits.filter((pit) => pit.belongsToOwner === false)

    const scorePlayer1 = game.players[0].score
    const scorePlayer2 = game.players.length === 1 ? 666 : game.players[1].score

    console.log("scorePlayer1", scorePlayer1)
    console.log("scorePlayer2", scorePlayer2)

    console.log("myside", sidePlayer1)
    console.log("yrside", sidePlayer2)

    return (
      <div className="board-wrapper">
        <div className="board-left">
          <div className="score-pit">
            <p>{scorePlayer2}</p>
          </div>
        </div>
        <div className="board-players">
          <div className="board-upper">
            {sidePlayer2.map(this.renderPit.bind(this))}
          </div>
          <div className="board-downer">
            {sidePlayer1.map(this.renderPit.bind(this))}
          </div>
        </div>
        <div className="board-right">
          <div className="score-pit">
            <p>{scorePlayer1}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
    game
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(Game)
