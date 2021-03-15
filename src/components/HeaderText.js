import React from 'react';
import { Text } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';

export default function({value}){
  return(
    <Text style={StyleGlobal.HeaderDefault}>
      {value}
    </Text>
  )
}


