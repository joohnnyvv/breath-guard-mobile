import {Text, TextStyle} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

interface GradientTextProps {
    text: string,
    style: TextStyle,
    textColor: string
}

function GradientText(props: GradientTextProps) {
    return (
        <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
            <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0d8bd0', '#C026D3']}
            >
                <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
            </LinearGradient>
        </MaskedView>
    );
}

export default GradientText;