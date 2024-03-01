import { View, Text, useColorScheme, Animated } from "react-native";
import Slider from "@react-native-community/slider";
import { useEffect, useRef } from "react";
import { predictionFormStyles } from "@/styles/styles";

interface AssessingFormProps {
  question: string;
  labelMin: string;
  labelMax: string;
}

export default function AssessingForm(props: AssessingFormProps) {
  const colorScheme = useColorScheme();
  const formAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(formAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[{ opacity: formAnim }, predictionFormStyles.container]}
    >
      <Text style={predictionFormStyles.questionText}>{props.question}</Text>
      <View style={predictionFormStyles.sliderInputContainer}>
        <View style={predictionFormStyles.labelsContainer}>
          <Text style={predictionFormStyles.labelText}>{props.labelMin}</Text>
          <Text style={predictionFormStyles.labelText}>{props.labelMax}</Text>
        </View>
        <Slider
          style={predictionFormStyles.slider}
          maximumValue={8}
          minimumValue={1}
          step={1}
        />
      </View>
    </Animated.View>
  );
}
