import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

import Colors from './constants/colors';

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
    <LinearGradient colors={[Colors.accent500, Colors.accent600]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/guessthenumberlogo.png')}
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
