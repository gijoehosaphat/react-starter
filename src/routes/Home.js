import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import { push } from 'react-router-redux'

import { connect, actions, selectors } from '../stores'

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
  onClickExampleGet(e) {
    e.preventDefault()
    this.props.dispatch(actions.app.exampleGet(1))
  }
  render() {
    return (
      <div className={'container'}>
        <div>
          <h1>Home</h1>
          <br />
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
        <div>
          <a href={'#'}
              onClick={this.onClickExampleGet.bind(this)}
          >
            Example GET
          </a>
          <br />
          <textarea 
              onChange={() => {}}
              value={JSON.stringify(this.props.exampleGet)} 
          />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  exampleGet: PropTypes.object,
}

Home.defaultProps = {
  exampleGet: { message: 'Loading...' },
}

export default connect(state => ({
  ...selectors.app.selectExampleGet(state),
}))(Home)