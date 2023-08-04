import { Text, View } from 'react-native';
import { Slot } from 'expo-router';
import React from 'react';

import "../global.css";

const RootLayout: React.FC = () => {
  return (
    <View className="m-8">
      <Text>RootLayout</Text>
      <Slot />
    </View>
  )
}

export default RootLayout;