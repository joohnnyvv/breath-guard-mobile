import React, {useState} from 'react';
import {ColorSchemeName, GestureResponderEvent, Pressable, Text, View, ViewStyle} from "react-native";
import Colors from "@/constants/Colors";

interface buttonProps {
    text: string
    colorScheme: ColorSchemeName,
    styles: ViewStyle,
    textSize?: number,
    bgColor?: string,
    onPress?: (event: GestureResponderEvent) => void;
}

function SecondaryButton(props: buttonProps) {
    const buttonTextColor = props.colorScheme === 'dark' ? Colors.dark.text : Colors.light.textInverted;
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            onPress={props.onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <View
                style={[props.styles, {alignItems: 'center', justifyContent: 'center', backgroundColor: props.bgColor}]}
            >
                <Text style={{
                    color: isPressed ? 'rgba(255,255,255,0.49)' : buttonTextColor,
                    fontSize: props.textSize,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
}

export default SecondaryButton;
