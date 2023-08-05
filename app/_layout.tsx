import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Slot } from 'expo-router';

import "../global.css";

const RootLayout: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center bg-sky-200 mt-12 px-4">
        <Slot />
      </View>
    </>
  )
}

export default RootLayout;