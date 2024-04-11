import React, { useCallback, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { StatusBar, View } from "react-native";
import Routes from "./src/routes";
import themes from "./src/global/styles/themes";
import * as SplashScreen from "expo-splash-screen";
import {useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";


export default function App(){
  const [fontsLoaded] = useFonts({
    Roboto_500Medium, Roboto_400Regular, Roboto_700Bold
  });

  useEffect (() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  },[])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
   }, [fontsLoaded]);

   if(!fontsLoaded) {
    return null;
   }

  return ( <View onLayout={onLayoutRootView} style={{flex:1}}>
  <StatusBar color="light"/>
  <ThemeProvider theme={themes}>
  <Routes />
  </ThemeProvider>
  </View>
  );
}