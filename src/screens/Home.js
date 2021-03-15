import React, { useContext, useState, useEffect, useImperativeHandle } from 'react';
import { View } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';
//components
import HeaderText from '../components/HeaderText';
import Button from '../components/Button';
//context
import { AuthContext } from '../contexts/authContext';
import User from './User';

export default function({navigation}){
  const {UserInfo, Clear, getUserInfo} = useContext(AuthContext);

  useEffect(() => {
    (async function check(){
      await getUserInfo();
    })();
  }, []);

  useEffect(() => {
    Clear();
    
    if(UserInfo)
      navigation.navigate('User');
    
    }, [UserInfo]);

  async function onClickToSignUp(){
    navigation.navigate('SignUp');
  }

  async function onClickToSignIn(){
    navigation.navigate('SignIn');
  }

  return(
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('home-page')}
      testID='home-page'
    >
      <HeaderText value='Home'/>

      <Button 
        value='CADASTRO'
        onPress={() => onClickToSignUp()}
        testId='signUp-button'
        contentDesc='signUp-button'
      />
      <Button 
        value='LOGIN' 
        onPress={() => onClickToSignIn()}
        testId='signIn-button'
        contentDesc='signIn-button'
      />
    </View>
  )
}