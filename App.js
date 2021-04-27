import React from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';

const getFonts = () => Font.loadAsync({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  
}); 

export default function App() {
  return (
    <Home />
  );
}
