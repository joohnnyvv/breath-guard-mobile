import {StyleSheet} from 'react-native';

export const predictionFormStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    questionText: {
        textAlign: 'center',
        fontFamily: 'mon-b',
        fontSize: 40
    },
    genderFormContainer: {
      alignItems: 'center',
    },
    genderPicker: {
        width: 200,
        height: 200
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 20
    }
})