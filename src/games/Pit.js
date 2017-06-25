import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Pit.css'

class Pit extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }


  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {

    const { value } = this.props
    console.log(value)

    return (
      <div className="pit">
          <p>{value}</p>
      </div>
    )
  }
}

export default Pit
