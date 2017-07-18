import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
  }


  componentWillMount() {
    const value = this.props
    this.setState({value})
  }

  componentWillReceiveProps(nextProps) {}

  render() {

    const value  = this.state

    console.log("value", this.state)

    return (
      <div className="pit">
          <p>{value}</p>
      </div>
    )
  }
}

export default Pit
