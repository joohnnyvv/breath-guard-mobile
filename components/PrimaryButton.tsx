import React, {useEffect, useRef, useState} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {Animated, ColorSchemeName, GestureResponderEvent, Pressable, Text, ViewStyle} from "react-native";
import Colors from "@/constants/Colors";

interface buttonProps {
    text: string
    colorScheme: ColorSchemeName,
    styles: ViewStyle,
    textSize?: number,
    onPress?: (event: GestureResponderEvent) => void;
}

function PrimaryButton(props: buttonProps) {
    const buttonTextColor = props.colorScheme === 'dark' ? Colors.dark.text : Colors.light.textInverted;
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            onPress={props.onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={Colors[props.colorScheme ?? 'light'].gradient}
                style={props.styles}
            >
                <Text style={{
                    color: isPressed ? 'rgba(255,255,255,0.49)' : buttonTextColor,
                    fontSize: props.textSize,
                    fontWeight: 'bold'
                }}>
                    {props.text}
                </Text>
            </LinearGradient>
        </Pressable>
    );
}

export default PrimaryButton;
