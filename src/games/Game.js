import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import './Game.css'
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

  renderPit(pit, index) { return <Pit key={index} { ...pit } /> }


  render() {
    const { game }  = this.props

    console.log("hij rendert!")

    console.log(game)

    if (!game) return null


    const pits = game.pits

    console.log(game.pits)

    return (

      <div className="board-wrapper">
        <div className="board-left">
          <ScorePit />
        </div>
        <div className="board-players">
          <div className="board-upper">

            {game.pits.map(this.renderPit.bind(this))}

          </div>
          <div className="board-downer">
            {game.pits.map(this.renderPit.bind(this))}
          </div>
        </div>
        <div className="board-right">
          <ScorePit />
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
