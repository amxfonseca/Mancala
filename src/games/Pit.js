import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    belongsToOwner: PropTypes.bool,
  }

  state = { value: 4, belongsToOwner: undefined }

  componentDidMount() {
    const {value, belongsToOwner } = this.props
    this.setState({ value, belongsToOwner})
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { value } = this.props
    const { belongsToOwner } = this.state

    return (
      <div className="pit">
          <button className="pit-action onchange"> 4 </button>
      </div>
    )
  }
}

export default Pit
