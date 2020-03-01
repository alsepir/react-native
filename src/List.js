'use strict'

import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { MENU, DESCRIPTION, LIST, LIST_BOTTOM, LIST_IMAGE } from './Type'
import ListItem from './ListItem'
import { Description } from './Description'

const ButtonBar = props => {
  return( <View style={styles.container}>
            <View style={{width: '50%'}}>
              <TouchableHighlight style={styles.buttonLeft} underlayColor='#99d9f4' 
                  onPress={() => props.GoBackTo('go Back')}>
                <Text style={styles.buttonTextLeft}>Назад</Text>
              </TouchableHighlight>
            </View>
            <View style={{width: '50%'}}>
              <TouchableHighlight style={styles.buttonRight} underlayColor='#99d9f4' 
                  onPress={() => props.GoBackTo('to Hello')}>
                <Text style={styles.buttonTextRight}>Выйти из аккаунта</Text>
              </TouchableHighlight>
            </View>
          </View> )
}

const ButtonBarProps = state => {
  return {
    level: state.level,
    idListItem: state.idListItem
  }
}

const GoBackTo = dispatch => ({
  type: dispatch
})

const LinkButtonBar = connect(ButtonBarProps, {GoBackTo})(ButtonBar)

const List = props => {
    let element = null
    let target = null
    
    if(props.level === MENU) {
      element = props.data.map( (data) => {
        let {id, title} = data
        return <ListItem key={id} item={title} id={id}/> 
      })
    } else if(props.level === DESCRIPTION) {
      target = props.data.filter( (data) => data.id == props.idListItem)
      element = ( <View>
                    <Description item={target[0].description} title={target[0].title}/>
                    <LinkButtonBar />
                  </View> )
    }

    return (
      <View style={{alignItems: 'center', height: LIST}}> 
        { element }
        { props.level === MENU  ? <View style={{position: 'absolute', top: LIST_IMAGE}}>
                                    <Image source={require('./img/leny.png')} style={styles.image}/>
                                  </View> 
                                : null }
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    position: 'absolute', 
    top: LIST_BOTTOM
  },
  buttonLeft: {
    height: 45,
    borderColor: '#48BB95',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRight: {
    height: 45,
    borderColor: '#48BB95',
    backgroundColor: '#48BB95',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextLeft: {
    fontSize: 16,
    color: '#48BB95',
    paddingLeft: '2%'
  },
  buttonTextRight: {
    fontSize: 16,
    color: '#fff',
    paddingLeft: '2%'
  },
  image: {
    width: 217,
    height: 138
  }
})

const mapStateToProps = state => {
  return {
    level: state.level,
    idListItem: state.idListItem
  }
}

export default connect(mapStateToProps)(List)
