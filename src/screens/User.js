import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

//components
import HeaderText from '../components/HeaderText';
import InfoText from '../components/InfoText';
import Button from '../components/Button';
//context
import { AuthContext } from '../contexts/authContext';

export default function({navigation}) {
  const {LogOut, Delete, UserInfo, getIdToken} = useContext(AuthContext);

  useEffect(() => {
    (async function getToken(){
      const res = await getIdToken();   //exemplo de uso da getIdToken
      //console.log(res);
    })();
  }, []);

  async function onClickSignOut(){
    const res = await LogOut();

    if(res)
      navigation.navigate('Home');
    
  }

  async function onClickDelete(){
    const responsee = await Delete();
   
    if(responsee)
      navigation.navigate('Home');
    else {
      return;
    }
  } 

  async function onClickChange(){
    navigation.navigate('ChangePass');
  }

  return(
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('user-page')}
      testID='user-page'
    >
      <HeaderText value="User" />

      {
        UserInfo ?
        <InfoText
          testId='user-info-text'
          contentDesc='user-info-text' 
          value1={UserInfo[0]} 
          value2 ={UserInfo[1]} />
        :
        null
      }

      <Button 
        value='SAIR' 
        onPress={async () => {
          await onClickSignOut();
        }}
        testId='logOut-button'
        contentDesc='logOut-button'
      />

      <Button 
        value='APAGAR CONTA' 
        onPress={async () => {
          await onClickDelete();
        }}
        testId='erase-button'
        contentDesc='logOut-button'
      />

      <Button 
        value='ALTERAR SENHA'
        onPress={async () => {
          await onClickChange();
        }}
        testId='change-button'
        contentDesc='change-button'
      />

    </View>
  )
}