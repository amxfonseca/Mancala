import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import CreateGameButton from './CreateGameButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye';
import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchGames, subscribeToGames } = this.props
    fetchGames()
    if (!subscribed) subscribeToGames()
  }

  goToGame(gameId) {
    const { push } = this.props

    return () => {
      push(`/games/${gameId}`)
    }
  }



  renderGame(game, index) {

    return (
      <MenuItem
        key={index}
        onClick={this.goToGame(game._id).bind(this)}
        rightIcon={<WatchGameIcon />}
        primaryText={`${game.owner.name}'s Game`} />
    )
  }

  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>
        <CreateGameButton />
        <Paper className="paper">
          <Menu>
            { this.props.games.map(this.renderGame.bind(this))}
          </Menu>
        </Paper>
      </div>
    )
  }
}
console.log('hello!')

const mapStateToProps = ({ games, currentUser, subscriptions }) => (
  {
    games,
    currentUser,
    subscribed: subscriptions.includes('games'),
  }
)

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(Lobby)
