import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'

class Test extends React.Component {
  constructor(props: Object) {
    super(props)
    this.state = {
      
    }
  }
  shouldComponentUpdate(nextProps: Object, nextState: Object): bool {
    return shallowCompare(this, nextProps, nextState)
  }
  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

Test.propTypes = {
  
}

Test.defaultProps = {
  
}

export default Test