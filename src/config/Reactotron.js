import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const configuration = { 
  name: 'real-shot-challenge' ,
}

Reactotron.configure(configuration).use(reactotronRedux()).connect()