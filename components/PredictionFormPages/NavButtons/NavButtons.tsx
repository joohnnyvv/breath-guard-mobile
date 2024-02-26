import SecondaryButton from "@/components/SecondaryButton";
import Colors from "@/constants/Colors/Colors";
import { predictionFormStyles } from "@/styles/styles";
import { ColorSchemeName, GestureResponderEvent, View } from "react-native";

interface NavButtonsProps {
  colorScheme: ColorSchemeName;
  onSubmit: (event: GestureResponderEvent) => void;
  isBackButtonVisible: boolean;
}

export default function NavButtons(props: NavButtonsProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 44,
      }}
    >
      {props.isBackButtonVisible && (
        <SecondaryButton
          text={"Back"}
          colorScheme={props.colorScheme}
          styles={predictionFormStyles.button}
          bgColor={
            props.colorScheme === "dark"
              ? Colors.dark.secondaryBackground
              : Colors.light.secondaryBackground
          }
          textSize={26}
          onPress={(event) => props.onSubmit(event)}
        />
      )}
      <SecondaryButton
        text={"Next"}
        colorScheme={props.colorScheme}
        styles={predictionFormStyles.button}
        bgColor={
          props.colorScheme === "dark"
            ? Colors.dark.secondaryBackground
            : Colors.light.secondaryBackground
        }
        textSize={26}
        onPress={(event) => props.onSubmit(event)}
      />
    </View>
  );
}
