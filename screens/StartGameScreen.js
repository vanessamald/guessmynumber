import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

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
        <View style={styles.inputContainer}>
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
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // only works for Android, comparable to boxShadow in CSS
        elevation: 4,
        // for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6
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
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})