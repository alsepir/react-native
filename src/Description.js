'use strict'

import React from 'react'
import { View, Text } from 'react-native'

export const Description = props => (
  <View style={{margin: '2%'}}>
    <Text style={{fontSize: 18, fontWeight: 'bold', paddingTop: 8}}>{props.title}</Text>
    <Text style={{fontSize: 16, paddingTop: 20, color: '#4d4d4d'}}>{props.item}</Text>
  </View>
)
