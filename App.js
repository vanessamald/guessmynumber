import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [ userNumber, setUserNumber ] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen/>;
  }

  return (
    <LinearGradient colors={['#fff2fc', '#f74bfb']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/guessthenumberlogo.png')}
        resizeMode='contain'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  }
});
