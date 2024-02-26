import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import {useColorScheme} from '@/components/useColorScheme';
import {getTextColor} from "@/constants/Colors/Helpers";

export {
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
        'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'mon-b': require('../assets/fonts/Montserrat-Bold.ttf')
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false, title: 'Get Started'}}/>
                <Stack.Screen name="predictionForm/index" options={{title: '', headerTintColor: getTextColor()}}/>
            </Stack>
        </ThemeProvider>
    );
}
