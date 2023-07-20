import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from '../components/ui/Card';
import Colors from '../constants/colors';

function StartGameScreen({ onConfirmNumber }) {
    const [ enteredNumber, setEnteredNumber ] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        // reset enteredNumber
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        // convert string to number
        const chosenNumber = parseInt(enteredNumber);
        console.log(chosenNumber);
        // if chosen number not a number || is less than or equal to 0 || is greater than 99
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            // show alert 
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onConfirmNumber(chosenNumber);
        console.log('HELLO');
    }
    
    return (
        <View style={styles.rootContainer}>
            <Card>
                <Text style={styles.instructionText}>Enter a Number</Text>
                <TextInput 
                    style={styles.numberInput} 
                    // sets the number of chars allowed
                    maxLength={2} 
                    // sets the keyboard that will open 
                    keyboardType='number-pad'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2,
        color: Colors.primary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    instructionText: {
        color: Colors.primary500,
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})