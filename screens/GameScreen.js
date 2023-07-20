import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';

// generate random number
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary= 100;

function GameScreen({ userNumber, onGameOver }) {
    // initial guess between 1 and 100 and exclude the user's guess
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    
    // check if game is over
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    // function to generate new random number that is lower or greater 
    function nextGuessHandler(direction) {
        // if the direction chosen is 'lower' and if the currentGuess is  actually lower than the userNumber
        if ((direction === 'lower' && currentGuess < userNumber) || // or
        // if the direction chosen is 'higher' and if the currentGuess is actually higher than the userNumber
            (direction === 'higher' && currentGuess > userNumber)
        ){
            // alert user
            Alert.alert("Don't lie!", "You know this is wrong...", [{ text: 'Sorry!', style: 'cancel'}])
            return;
        }
        if (direction === 'lower') {
            // new max boundary 
            maxBoundary = currentGuess;
        } else {
            // new min boundary
            minBoundary = currentGuess + 1;
        }
        // generate new random number 
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        console.log(newRndNumber);
    }

    return ( 
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text></Text>
            <Card>

                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </Card>
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