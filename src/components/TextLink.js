import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { collors } from '../constants/constants';
import { testProp } from '../Tests-config';

export default function ({ text, onPress, testid, contentDesc }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={StyleGlobal.TextLink}
      {...testProp(testid)}
      testID={contentDesc}
    >
      <Text style={{  color:collors.dark }}>{text}</Text>
    </TouchableOpacity>
  );
}