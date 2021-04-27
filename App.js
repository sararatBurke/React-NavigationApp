import React, {usedState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  
}); 

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if (fontsLoaded){
    return (
      <Home />
    );
  }
  else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={() =>  setFontsLoaded(true) }
      />
    )
  }
 
}
