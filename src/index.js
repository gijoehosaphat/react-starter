import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

//Reactotron
import './config/Reactotron'

//Amplify
import Amplify from 'aws-amplify'
Amplify.configure({
  Auth: {
    identityPoolId: process.env.AMPLIFY.identityPoolId,
    region: process.env.AMPLIFY.region, 
    userPoolId: process.env.AMPLIFY.userPoolId,
    userPoolWebClientId: process.env.AMPLIFY.userPoolWebClientId,
  },
})

//Redux
import { Provider } from 'react-redux'
import { store, persistor } from './stores/configureStore'

//App
import Routes from './Routes'

//Styles
import './style/app.scss'

class App extends React.Component {
  constructor(props: Object) {
    super(props)
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate
            loading={null} 
            persistor={persistor}
        >
          <Routes store={this.props.store} />
        </PersistGate>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object,
}

render(<App store={store} />, document.getElementById('root'))