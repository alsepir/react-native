'use strict'

import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

const ListItem = props => {
  const { container, button, buttonText } = styles 
  return (
    <View style={container}>
        <TouchableHighlight style={button} underlayColor='#99d9f4' 
            onPress={ () => {props.mapDispatchToProps(props.id)} }>
          <Text style={buttonText}>{props.item}</Text>
        </TouchableHighlight>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}

const mapDispatchToProps = id => ({
  type: 'to Description',
  idListItem: id
})

export default connect(mapStateToProps, {mapDispatchToProps})(ListItem)

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: '2%'
  },
  button: {
    height: 50,
    borderColor: '#b0f7e1',
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'flex-start',
    paddingLeft: '2%'
  }
})
