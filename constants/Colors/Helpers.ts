import {useColorScheme} from "@/components/useColorScheme";
import Colors from "@/constants/Colors/Colors";

export const getTextColor  = () => {
    const colorScheme = useColorScheme();
    return colorScheme === 'dark' ? Colors.dark.text : Colors.light.text;
}