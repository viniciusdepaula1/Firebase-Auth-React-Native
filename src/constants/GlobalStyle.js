import { StyleSheet } from 'react-native';
import { screen } from './constants';

export const StyleGlobal = StyleSheet.create({
  ContainerDefault : {
    flex : 1,
    alignContent : "center", 
    paddingTop: screen.height * 0.05, 
    paddingHorizontal: screen.width * 0.09
  },
  HeaderDefault : {
    fontSize : 20, 
    alignSelf : "center", 
    marginBottom: 20
  },
  IfonUser : {
    fontSize : 15,
    alignSelf: 'center',
    marginTop: 20
  },
  InputDefault : {
    marginBottom : 10
  },
  Buttom : {
    backgroundColor: '#22628c',
    alignItems: 'center',
    alignSelf: 'center',
    width : screen.width * 0.6,
    paddingVertical: screen.width * 0.011,
    paddingHorizontal: screen.width * 0.014,
    borderRadius: 5,
    marginTop: 20
  },
  TextLink : {
    alignItems: 'center',
    alignSelf: 'center',
    width : screen.width * 0.6,
    paddingVertical: screen.width * 0.011,
    paddingHorizontal: screen.width * 0.014,
    marginTop: 20
  },
  ButtomText : {
    fontSize: 18,
    color: 'white'
  }
})

