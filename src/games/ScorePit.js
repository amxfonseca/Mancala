import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ScorePit.css'

class ScorePit extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  state = {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { value } = this.props


    return (

      <div className="score-pit">
          {"score"}
      </div>

    )
  }
}

export default ScorePit
