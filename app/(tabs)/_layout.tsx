import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarHideOnKeyboard: true,
                headerShown: useClientOnlyValue(false, true),
                tabBarLabelStyle: {
                    fontFamily: 'mon-sb'
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Get Started',
                    headerShown: false,
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({color}) => <TabBarIcon name="dashboard" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="educational"
                options={{
                    title: 'Educational',
                    tabBarIcon: ({color}) => <TabBarIcon name="book" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({color}) => <TabBarIcon name="info" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                }}
            />
        </Tabs>
    );
}
