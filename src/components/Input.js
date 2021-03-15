import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { screen, collors } from '../constants/constants';
import { testProp } from '../Tests-config';

export default function ({
  value, 
  placeholder,
  onChangeText,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
  multiline,
  numberOfLines,
  maxLength,
  style, // sobrescrever o estlo predefinido
  testid,
  contentDesc
}) {
  const [focused, setFocused] = useState(false);

  return(
    <TextInput 
      placeholder={placeholder}
      value={value}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...testProp(testid)}
      testID={contentDesc}
      style={{
        backgroundColor: 'white',
        paddingVertical: screen.height * 0.008,
        paddingHorizontal: screen.width * 0.014,
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: focused ? collors.main : 'white',
        ...style,
      }}
    />
  )
}