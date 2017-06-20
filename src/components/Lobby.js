// src/components/Lobby.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
// // import './Lobby.css'
// import fetchGames from '../actions/games/fetch'
// import subscribeToGames from '../actions/games/subscribe'
// import CreateGameButton from './CreateGameButton'
//
 export class Lobby extends PureComponent {
//   componentWillMount() {
//     this.props.fetchGames()
//     this.props.subscribeToGames()
//   }
//
//
//   goToGame(gameId) {
//     const navTo = this.props.push
//     return (id=gameId) => {
//       navTo(`games/${id}`)
//     }
//   }

  render() {
    return(
      <div className="wrapper">
        <header>
          <Title content="HELLO//////" />
        </header>

        <main>
          { this.props.games.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
})(Lobby)
