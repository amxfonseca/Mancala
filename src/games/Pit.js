import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import drawStones from '../actions/games/draw-stones'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    belongsToOwner: PropTypes.bool,
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  draw() {
    const { value, onDraw, currentGame, index, belongsToOwner }  = this.props
    const pit = { index, belongsToOwner, value }
    console.log("pit:",pit)
    this.props.drawStones(currentGame, pit)
  }

  render() {
    const { value }  = this.props

    return (
      <div className="pit" onClick={this.draw.bind(this)}>
        <p>{value}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame })

export default connect(mapStateToProps, { drawStones })(Pit)
