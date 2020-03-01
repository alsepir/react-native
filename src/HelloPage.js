'use strict'

import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { LIST } from './Type'

class Hello extends Component {
  state = {
    login: ''
  }

  onTextChanged = event => this.setState({ login: event.nativeEvent.text })

  checkLogin = () => {
    if(this.state.login.trim() === '')  return

    this.props.addPerson(this.state.login)   
    //this.setState({login: '' })
  }

  render() {
    //console.log('Hello', this.state)
    return (
      <View style={{height: LIST }}>
        <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={120}>
          <View style={{ paddingTop: '20%', paddingBottom: '10%', alignItems: 'center'}}>
            <Text style={{fontSize: 36, fontWeight: 'bold'}}>Вход</Text>
          </View>

          <View style={{ paddingBottom: '0%', alignItems: 'center', width: '80%'}}>
            <Text style={{fontSize: 16, textAlign: 'center', color: '#656565'}}>
              Правда ли, что ленивец постоянно спит? Почему он так медленно передвигается? Ходит ли по земле?
              Кажется, будто они годятся лишь на то, чтобы светить своими комическими мордами на картинках в Интернете. Но так ли это?
            </Text>
          </View>

          <View style={{ width: '90%', justifyContent: 'center'}}>
            <TextInput style={styles.inputText} value={this.state.login} placeholder='Логин' onChange={this.onTextChanged.bind(this)}/>      
          </View>

          <View style={{ width: '90%', justifyContent: 'center'}}>
            <TextInput style={styles.inputText} placeholder='Пароль'/>           
          </View>

          <View style={{flex: 1, width: '80%', marginTop: '5%'}}>
            <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.checkLogin}>
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    elevation: -1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  inputText: {
    fontSize: 16,
    borderBottomWidth: 1,
    color: '#48BB95',
    borderColor: '#48BB95'
  },
  button: {
    height: 40,
    backgroundColor: '#48BB95',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
})

const addPerson = content => ({
  type: 'to Menu',
  payload: content
})

const mapStateToProps = state => {
  return { 
    name: state.name     
  }
}

export default connect(mapStateToProps, { addPerson })(Hello)
