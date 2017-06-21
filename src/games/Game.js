// src/games/Game.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import './Game.css'
import { Link } from 'react-router'


export class Game extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  }



  render() {
    const {
      _id,
      title,
      summary,
      owner,

    } = this.props


    return(
      <article className="game">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `http://lowres-picturecabinet.com.s3-eu-west-1.amazonaws.com/125/main/1/421184.jpg` }} />
          <h1>
            <Link to={`/games/${_id}`}>{ title }</Link>
          </h1>
        </header>
        <main>

        </main>
        <footer>
          <p Footer />
        </footer>
      </article>
    )
  }
}

export default connect(null, {})(Game)
