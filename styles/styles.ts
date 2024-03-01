import {StyleSheet} from 'react-native';

export const predictionFormStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 90,
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
    },
    sliderInputContainer: {
        gap: 30,
        alignItems: 'center'
    },
    labelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    labelText: {
        fontFamily: 'mon-sb',
        fontSize: 20,
        width: 160,
        textAlign: 'center'
    },
    slider: {
         width: 300, 
         height: 50 
    }
})