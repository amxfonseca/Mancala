import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
  }


  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {

    const {value}  = this.props

    console.log("value", this.props)

    return (
      <div className="pit">
          <p>{value}</p>
      </div>
    )
  }
}

export default Pit
