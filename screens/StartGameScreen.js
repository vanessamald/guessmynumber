import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                // sets the number of chars allowed
                maxLength={2} 
                // sets the keyboard that will open 
                keyboardType='number-pad'
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#B207B6',
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
        borderBottomColor: 'pink',
        borderBottomWidth: 2,
        color: 'pink',
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