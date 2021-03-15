import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { StyleGlobal } from '../constants/GlobalStyle';
import { testProp } from '../Tests-config';

//components
import Input from '../components/Input';
import HeaderText from '../components/HeaderText';
import Button from '../components/Button';
import InfoText from '../components/InfoText';
//context
import { AuthContext } from '../contexts/authContext';

export default function({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const { SignUp, ErrMsg, UserInfo, Clear } = useContext(AuthContext);

  useEffect(() => {
    Clear();
    if(UserInfo){
      navigation.navigate('User')
    }
  }, [UserInfo]);

  async function onClickSignUp(){
    if(password != passwordConf)
      return;
    if(password.length == 0)
      return;
    if(email.length == 0)
      return;
    
    const result = await SignUp(email, password);
    //console.log(result);

    if(!result)
      return;

    if(result){
      navigation.navigate('User');
    }
  }

  return (
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('signUp-page')}
      testID='signUp-page'
    >

      <HeaderText value='Cadastro' />

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

      <Input 
        placeholder='Confirme sua senha' 
        value={passwordConf} 
        autoCapitalize='none' 
        onChangeText={setPasswordConf} 
        secureTextEntry 
        testid='password-confirm-input'
        contentDesc='password-confirm-input'
      />

      <Button 
        value='CADASTRAR' 
        onPress={() => onClickSignUp()}
        testid='signUp-button'
        contentDesc='signUp-button'
      />

      {
        ErrMsg ?
          <InfoText 
            value1={ErrMsg}
            testId='signUp-info-text'
            contentDesc='signUp-info-text'
          />
        :
          null
      }

    </View>
  )
}