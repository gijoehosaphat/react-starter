import React from 'react'
import PropTypes from 'prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import { Switch, Router, Route } from 'react-router-dom'
import { ConnectedRouter, LOCATION_CHANGE } from 'react-router-redux'
import { history } from './stores/configureStore'

//Routes
import Home from './routes/Home'
import Test from './routes/Test'

class Routes extends React.Component {
  constructor(props: Object) {
    super(props)
  }
  shouldComponentUpdate(nextProps: Object, nextState: Object): bool {
    return shallowCompare(this, nextProps, nextState)
  }
  componentWillUnmount() {
    if (this.unsubscribeFromHistory) {
      this.unsubscribeFromHistory()
    }
  }
  render() {
    return (
      <Router 
          history={history}
          store={this.props.store} 
      >
        <Switch>
          <Route 
              component={Home}
              exact={true}
              path={'/'}
          />
          <Route 
              component={Test}
              path={'/test'}
          />
        </Switch>
      </Router>
    )
  }
}

Routes.propTypes = {
  isSSR: PropTypes.bool,
  store: PropTypes.object,
}

Routes.defaultProps = {
  
}

export default Routes