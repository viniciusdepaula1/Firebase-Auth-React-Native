import React, { useContext, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

//components
import Input from '../components/Input';
import HeaderText from '../components/HeaderText';
import Button from '../components/Button';
import InfoText from '../components/InfoText';
//context
import { AuthContext } from '../contexts/authContext';

export default function({navigation}){
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');
  const {setErrMsg, ChangePassword, ErrMsg} = useContext(AuthContext);

  async function onClickRec(){
    if(password === confPass){
      const verify = await ChangePassword(confPass);
      if(verify){
        Alert.alert('SENHA', 'Senha alterada com sucesso');
        navigation.navigate('User');
      }
    }
    setErrMsg('Senhas devem ser iguais');
    return
//    const verify = await ResetPassword(email);
    
//    if(verify){
//      navigation.navigate('Home');
//    }
  }

  return(
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('change-password-page')}
      testID='change-password-page'
    >
      <HeaderText value='Digite sua nova senha' />
      
      <Input 
        placeholder='Senha' 
        value={password} 
        autoCapitalize='none' 
        onChangeText={setPassword} 
        secureTextEntry
        style={StyleGlobal.InputDefault} 
        testid='change-password-input'
        contentDesc='change-password-input'
      />
      
      <Input 
        placeholder='Confirme a senha' 
        value={confPass} 
        autoCapitalize='none' 
        onChangeText={setConfPass} 
        secureTextEntry
        style={StyleGlobal.InputDefault} 
        testid='change-password-input'
        contentDesc='change-password-input'
      />

      <Button 
        value='ALTERAR' 
        onPress={async () => await onClickRec()}
        testId='change-password-button'
        contentDesc='change-password-button'
      />

      {
        ErrMsg ?
          <InfoText 
            testId='recovery-info-text'
            contentDesc='recovery-info-text'
            value1={ErrMsg}
          />
        :
          null  
      }

    </View>
  )
}