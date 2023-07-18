import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#fff2fc', '#f74bfb']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/guessthenumberlogo.png')}
        resizeMode='contain'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen/>
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
