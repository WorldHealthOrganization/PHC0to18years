import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppRoot from './src/components/root/AppRoot';

function App(): JSX.Element {
useEffect(()=>{
  if(Platform.OS=="android")
  {
    SplashScreen.hide();
  }

})
  
  return <AppRoot />;
}

export default App;
