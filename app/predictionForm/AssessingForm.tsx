import { View, Text, useColorScheme } from "react-native";
import Slider from "@react-native-community/slider";
import NavButtons from "@/components/PredictionFormPages/NavButtons/NavButtons";

interface AssessingFormProps {
  question: string;
  labelMin: string;
  labelMax: string;
}

export default function AssessingForm(props: AssessingFormProps) {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Text>{props.question}</Text>
      <Slider
        style={{ width: 300, height: 50 }}
        maximumValue={8}
        minimumValue={1}
        step={1}
      />
    </View>
  );
}
