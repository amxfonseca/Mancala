import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import JoinGameDialog from './JoinGameDialog'
import drawStones from '../actions/games/draw-stones'
import './Game.css'
import Pit from './Pit'


class Game extends PureComponent {

  componentWillMount() {
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed, currentUser } = this.props
    const { gameId } = this.props.params

    if (!game) fetchGames()
    getCurrentGame(gameId)
    if (!subscribed) subscribeToGames()
  }

  drawStones(pit) {
    const { game }  = this.props

    return () => {
      this.props.drawStones(game, pit)
    }
  }

  renderPit(pit, index) {
    return <Pit
    key={index} { ...pit }
    index={index}
    onDraw={this.drawStones(index).bind(this)}/>
  }

  winner() {
    const {game, winnerId} = this.props
    if (!winnerId) return null
    console.log("winning")
    let winner = (winnerId === game.players[0]._id) ? "Player 1 wins!" : "Player 2 wins!"
    return winner
  }

  render() {

    const { game, hasTurn, currentUser }  = this.props
    console.log("game:", game, "hasTurn", hasTurn)

    if (!game) return null

    const sidePlayer1 = game.pits.slice(0, 6)
    const sidePlayer2 = game.pits.slice(6, 12)

    const scorePlayer1 = game.players[0].score
    const scorePlayer2 = game.players.length === 1 ? 0 : game.players[1].score

    let winner = game.winnerId
      if (winner && winner === game.players[0]._id) winner = game.players[0].name
      // if (winner && winner === game.players[1]._id) winner = game.players[1].name
      console.log("winner", winner)

    // const otherPlayer = game.players.filter((p) => (p.userId !== currentUser._id))[0]
    // console.log(otherPlayer)


    return (
      <div className="mancala">
        <p className="turn">
        {winner !== undefined ? `${winner} wins!` :
          `It is ${ hasTurn ? 'YOUR' : 'THEIR' } turn!`}
        </p>
        <div className="board-wrapper">
          <div className="board-left">
            <div className="score-pit">
              <p>{scorePlayer2}</p>
            </div>
          </div>
          <div className="board-players">
            <div className="board-upper">
              {(sidePlayer2.map(this.renderPit.bind(this))).reverse()}
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
          <JoinGameDialog />
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
    hasTurn: game && game.players.map((p) => (p.userId))[game.turn] === currentUser._id,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
  drawStones,
})(Game)
