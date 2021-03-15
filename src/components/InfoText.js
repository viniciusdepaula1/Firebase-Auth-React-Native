import React from 'react';
import { Text } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

export default function({value1, value2, testId, contentDesc}){
  if(value1 && value2){
    return(
      <Text 
        testID={contentDesc}
        {...testProp(testId)}
        style={StyleGlobal.IfonUser}>
        Email: {value1} {"\n"} 
        UID: {value2} 
      </Text>
    )  
  }
  else
    return(
      <Text 
        testID={contentDesc}
        {...testProp(testId)}
        style={StyleGlobal.IfonUser}>
        {value1} 
      </Text>
    )
  
}


