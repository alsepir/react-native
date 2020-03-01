import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Header from './src/Header'
import Main from './src/Main'

const App = props => {
  //console.log('App', props) 
  return (
      <View>
        <Header />
        <Main />
      </View>
    )
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(App)