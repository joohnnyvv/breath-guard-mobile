import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useColorScheme} from '@/components/useColorScheme';
import GradientText from "@/components/GradientText";
import PrimaryButton from "@/components/PrimaryButton";
import {useEffect, useRef} from "react";
import {router} from "expo-router";
import {getTextColor} from "@/constants/Colors/Helpers";

export default function GetStarted() {
    const colorScheme = useColorScheme();

    const textColor = getTextColor();
    const entranceAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(entranceAnim, {
                toValue: 1.1,
                duration: 750,
                useNativeDriver: true,
            }),
            Animated.timing(entranceAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true
            })
        ]).start();
    }, [entranceAnim]);

    return (
        <ScrollView contentContainerStyle={{
            height:'100%',
            alignItems:'center'
        }}>
            <Animated.View style={[styles.container, {transform: [{scale: entranceAnim}]}]}>
                <View>
                    <Text style={[styles.text, {color: textColor}]}>The Next</Text>
                    <GradientText style={styles.text} textColor={textColor} text={`Generation`}/>
                    <Text style={[styles.text, {color: textColor}]}>Lung Cancer {`\n`}Risk Predictor</Text>
                </View>
                <PrimaryButton onPress={(event) => router.push('/predictionForm/')} textSize={26} text='Get Started' colorScheme={colorScheme} styles={styles.buttonContainer}/>
            </Animated.View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 100,
    },
    text: {
        fontFamily: 'mon-b',
        textAlign: 'left',
        fontSize: 50,
    },
    buttonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    button: {
        height: 100,
        width: 100
    }
});
