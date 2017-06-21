import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    belongsToOwner: PropTypes.bool,
  }

  state = { value: 4, belongsToOwner: true }

  componentDidMount() {
    const {value, belongsToOwner } = this.props
    this.setState({ value, belongsToOwner})
  }

  render() {
    const { value, belongsToOwner } = this.props

    return (
      <div className="pit">
          <button className="pit-action onchange"> 4 </button>
      </div>
    )
  }
}

export default Card
