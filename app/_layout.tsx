import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import "../global.css";

const RootLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'DMSerifDisplayRegular': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View 
        className="flex-1 items-center justify-center bg-sky-200 mt-12 px-4"
        onLayout={onLayoutRootView}>
        <Slot />
      </View>
    </>
  )
}

export default RootLayout;