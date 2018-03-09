import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const configuration = { 
  name: 'react-starter' ,
}

Reactotron.configure(configuration).use(reactotronRedux()).connect()