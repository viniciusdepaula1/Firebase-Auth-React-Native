import { Dimensions, StatusBar } from 'react-native';

const heightDimension = {
  deviceH : Dimensions.get('screen').height,
  windowH : Dimensions.get('window').height,
}

const bottomNavBar = heightDimension.deviceH - heightDimension.windowH;

export const screen = {
  height: heightDimension.deviceH - bottomNavBar - StatusBar.currentHeight,
  width: Dimensions.get('window').width,
};

export const collors = {
  main : '#22628c',
  dark : '#00385e',
  light : '#588fbc'
}