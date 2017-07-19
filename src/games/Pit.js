import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    belongsToOwner: PropTypes.bool,
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}



  render() {
    const { value }  = this.props
    console.log("value", value)

    return (
      <div className="pit">
          <p>{value}</p>
      </div>
    )
  }
}

export default Pit
