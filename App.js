import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [ userNumber, setUserNumber ] = useState();
  const [ gameIsOver, setGameIsOVer ] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOVer(false);
  }

  function gameOverHandler() {
    setGameIsOVer(true);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
  }



  return (
    <LinearGradient colors={[Colors.accent500, Colors.accent600]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/guessmynumber.png')}
        resizeMode='contain'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
