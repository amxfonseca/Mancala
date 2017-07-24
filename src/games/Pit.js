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
    const { onDraw } = this.props
    return onDraw()
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
