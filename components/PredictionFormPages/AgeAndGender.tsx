import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { getTextColor } from "@/constants/Colors/Helpers";
import { predictionFormStyles } from "@/styles/styles";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Colors from "@/constants/Colors/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Picker } from "@react-native-picker/picker";

interface AgeAndGenderProps {
  updateUserData: (dataInfo: { value: number; index: number }) => void;
}

function AgeAndGender(props: AgeAndGenderProps) {
  const colorScheme = useColorScheme();
  const textColor = getTextColor();
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(1);
  const formAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(formAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const onDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    const selectedAge = calculateAge(date);
    setAge(selectedAge);
    props.updateUserData({ value: selectedAge, index: 0 });
  };

  const onSexChange = (selectedSex: number) => {
    setGender(selectedSex);
    props.updateUserData({ value: selectedSex, index: 1 });
  };

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    console.log("Today: ", today.toString());
    const diffMs = today.getTime() - birthDate.getTime();
    return Math.abs(new Date(diffMs).getUTCFullYear() - 1970);
  };

  return (
    <View style={predictionFormStyles.container}>
      <Animated.View
        style={{
          opacity: formAnim,
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
        }}
      >
        <Text style={[predictionFormStyles.questionText, { color: textColor }]}>
          Enter your birth date
        </Text>
        <DateTimePicker
          value={date}
          onChange={onDateChange}
          maximumDate={new Date()}
          themeVariant={colorScheme}
          accentColor={
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
          }
          style={{ transform: "scale(1.2)" }}
        />
        <View style={predictionFormStyles.genderFormContainer}>
          <Text
            style={[predictionFormStyles.questionText, { color: textColor }]}
          >
            Choose your sex
          </Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => onSexChange(itemValue)}
            style={[predictionFormStyles.genderPicker]}
            itemStyle={{ color: textColor }}
          >
            <Picker.Item label="Male" value={1} />
            <Picker.Item label="Female" value={2} />
          </Picker>
        </View>
      </Animated.View>
    </View>
  );
}

export default AgeAndGender;
