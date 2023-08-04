import { Text } from 'react-native';
import { Slot } from 'expo-router';
import React from 'react';

const RootLayout: React.FC = () => {
  return (
    <>
      <Text>RootLayout</Text>
      <Slot />
    </>
  )
}

export default RootLayout;