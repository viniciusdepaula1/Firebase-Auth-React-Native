import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

export default function({value, onPress, testId, contentDesc}){
  return(
    <TouchableOpacity
      onPress={onPress}
      style={StyleGlobal.Buttom}
      {...testProp(testId)}
      testID={contentDesc}
    >
      <Text style={StyleGlobal.ButtomText}>{value}</Text>
    </TouchableOpacity>
  )
}