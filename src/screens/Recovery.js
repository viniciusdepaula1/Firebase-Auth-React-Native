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
  const {ResetPassword, ErrMsg} = useContext(AuthContext);

  async function onClickRec(){
    if(email.length == 0)
      return;

    const verify = await ResetPassword(email);
    
    if(verify){
      navigation.navigate('Home');
    }
  }

  return(
    <View 
      style={StyleGlobal.ContainerDefault}
      {...testProp('recovery-page')}
      testID='recovery-page'
    >
      <HeaderText value='Digite seu email' />
      
      <Input 
        placeholder='Email' 
        value={email} 
        autoCapitalize='none' 
        onChangeText={setEmail} 
        keyboardType='email-address' 
        style={StyleGlobal.InputDefault} 
        testid='email-recovery-input'
        contentDesc='email-recovery-input'
      />

      <InfoText value1='Será enviado um link para seu email'/>

      <Button 
        value='Enviar' 
        onPress={async () => await onClickRec()}
        testId='recovery-button'
        contentDesc='recovery-button'
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