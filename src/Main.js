
import React from 'react'
import { connect } from 'react-redux'

import { MENU, DESCRIPTION } from './Type'
import Hello from './HelloPage'
import List from './List'
import Storage from './../storage.json'
 
const Main = props => {
  if(props.level === MENU || props.level === DESCRIPTION) return(<List data={Storage}/>) 
  else return(<Hello />)
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(Main)
