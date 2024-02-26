import React, {useState} from 'react';
import {Text, View} from "react-native";
import {getTextColor} from "@/constants/Colors/Helpers";
import {predictionFormStyles} from "@/styles/styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from "@/constants/Colors/Colors";
import {useColorScheme} from "@/components/useColorScheme";

function Age() {
    const colorScheme = useColorScheme();
    const textColor = getTextColor();
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate: Date) => {
        setDate(selectedDate);
    };


    return (
        <View style={predictionFormStyles.container}>
            <Text style={[predictionFormStyles.questionText, {color: textColor}]}>Enter your birth date</Text>
            <DateTimePicker value={date} onChange={() => onChange} maximumDate={new Date()} themeVariant={colorScheme}
                            accentColor={colorScheme === 'dark' ? Colors.dark.tint : Colors.light.tint} style={{justifyContent:'center'}}/>
        </View>
    );
}

export default Age;