// src/games/Lobby.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Game from './Game'
import './Lobby.css'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import CreateGameButton from './CreateGameButton'

class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <Game key={index} { ...game }  />
  }

  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="All Games" />
          <CreateGameButton />
        </header>

        <main>
        <Game />
          // { this.props.games.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
  fetchGames, subscribeToGamesService
})(Lobby)
