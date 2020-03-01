
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { Icon } from 'react-native-elements'

// import ArrowLeft from 'react-native-vector-icons/AntDesign'
// import Person from 'react-native-vector-icons/MaterialIcons'
// <Person name="person" size={28} color="#fff"/>
// <ArrowLeft name="arrowleft" size={28} color="#fff"/>

import { INPUT, MENU, DESCRIPTION, HEADER } from './Type'

class Header extends Component {
  goBack = () => {
    this.props.mapDispatchToProps()
  }

  render() {
    let element = null

    if(this.props.level === INPUT) {
      element = <Text style={styles.text}>Вход в личный кабинет</Text>
    } else if(this.props.level === MENU) {
      element = ( <View style={styles.box}>
                    <Text style={styles.text}>Список</Text>
                    <View style={styles.deepContainer}>
                      <Text style={styles.text}>{this.props.name}</Text>
                      <Icon name='person' type='material' size={28} color='#fff'/>
                    </View>
                  </View> )
    } else if(this.props.level === DESCRIPTION) {
      element = ( <View style={styles.box}>
                    <View style={styles.deepContainer}> 
                      <TouchableOpacity onPress={this.goBack}>
                        <Icon name='arrow-back' type='material' size={28} color='#fff'/>
                      </TouchableOpacity>
                      <View style={{paddingLeft: 10}}><Text style={styles.text}>Описание</Text></View>
                    </View>
                    <View style={styles.deepContainer}>
                      <Text style={styles.text}>{this.props.name}</Text>
                      <Icon name='person' type='material' size={28} color='#fff'/>
                    </View>
                  </View> )
    }

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {element}
        </View>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEADER,
    justifyContent: 'center',
    backgroundColor: '#48BB95'
  },
  subContainer: {
    flexDirection: 'row',
    marginLeft: '4%',
    marginRight: '4%'
  },
  box: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flex: 1
  },
  deepContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: '#fff',

  }
})

const mapStateToProps = state => {
  return {
    level: state.level,
    name: state.name
  }
}

const mapDispatchToProps = () => ({
  type: 'go Back'
})

export default connect(mapStateToProps, {mapDispatchToProps})(Header)