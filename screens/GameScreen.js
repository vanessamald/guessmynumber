import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import Colors from '../constants/colors';

// generate random number
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({ userNumber }) {
    // initial guess between 1 and 100 and exclude the user's guess
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    
    return ( 
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text></Text>
            <View>
                <Text>Higher or lower?</Text>{/* + - */}
            </View>
            <View>{/*LOG ROUNDS*/}</View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    }
})

export default GameScreen;