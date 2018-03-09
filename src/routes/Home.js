import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import { push } from 'react-router-redux'

import { connect } from '../stores'

// const responsiveImage = require('../../assets/images/favicon.png?sizes[]=100,sizes[]=200,sizes[]=300')

class Home extends React.Component {
  constructor(props: Object) {
    super(props)
    this.state = {
      
    }
  }
  shouldComponentUpdate(nextProps: Object, nextState: Object): bool {
    return shallowCompare(this, nextProps, nextState)
  }
  onClick(e) {
    e.preventDefault()
    this.props.dispatch(push('/test'))
  }
  render() {
    return (
      <div className={'container'}>
        <div className={'title'}>
          Home
          <a href={'#'}
              onClick={this.onClick.bind(this)}
          >
            Test
          </a>
          {/* <img 
              src={responsiveImage.src} 
              srcSet={responsiveImage.srcSet} 
          /> */}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
}

Home.defaultProps = {
  
}

export default connect()(Home)