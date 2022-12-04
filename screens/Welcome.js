import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeImage,
  WelcomeContainer,
  Avatar,
} from '../components/styles';

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('../assets/img/expo-bg2.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>Olga Simpson</SubTitle>
          <SubTitle welcome={true}>olgasimposn@gmail.com</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('../assets/img/expo-bg1.png')} />

            <Line />

            <StyledButton onPress={() => {}}>
              <ButtonText>LogOut</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
