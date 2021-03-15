import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

//components
import Input from '../components/Input';
import HeaderText from '../components/HeaderText';
import Button from '../components/Button';
import InfoText from '../components/InfoText';
import TextLink from '../components/TextLink';
//context
import { AuthContext } from '../contexts/authContext';

export default function({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { SignIn, ErrMsg, Clear, UserInfo } = useContext(AuthContext);

  useEffect(() => {
    Clear();

    if(UserInfo){
      navigation.navigate('User')
    }
  }, [UserInfo]);

  async function onClickSignIn(){
    Clear();

    if(email.length == 0) 
      return;

    if(password.length == 0)
      return;
    
    const result = await SignIn(email, password);
    
    //console.log('From SignIn');
    //console.log(result);

    if(!result){
      return
    }

    if(result){
      navigation.navigate('User');
    }
  }

  function onClickRecovery(){
    navigation.navigate('Recovery');
  }

  return(
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('signIn-page')}
      testID='signIn-page'
    >
      <HeaderText value='Login' />
      
      <Input 
        placeholder='Email' 
        value={email} 
        autoCapitalize='none' 
        onChangeText={setEmail} 
        keyboardType='email-address' 
        style={StyleGlobal.InputDefault} 
        testid='email-input'
        contentDesc='email-input'
      />

      <Input 
        placeholder='Senha' 
        value={password} 
        autoCapitalize='none' 
        onChangeText={setPassword} 
        secureTextEntry 
        style={StyleGlobal.InputDefault} 
        testid='password-input'
        contentDesc='password-input'
      />

      <TextLink 
        text='Recuperar Senha' 
        onPress={() => onClickRecovery()}
        testid='recovery-button'
        contentDesc='recovery-button'
      />
      
      <Button 
        value='LOGAR' 
        onPress={async () => await onClickSignIn()}
        testId='signIn-button'
        contentDesc='signIn-button'
      />

      {
        ErrMsg ?
          <InfoText 
            testId='signIn-info-text'
            contentDesc='signIp-info-text'
            value1={ErrMsg}
          />
        :
          null
      }

    </View>
  )
}