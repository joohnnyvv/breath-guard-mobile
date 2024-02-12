import React, {useEffect, useRef} from 'react';
import {Animated, Image, Linking, ScrollView, StyleSheet, Text, View} from "react-native";
import {useColorScheme} from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import {ContactItemsData} from "@/constants/tabs/About";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function About() {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'dark' ? Colors.dark.text : Colors.light.text;
    const headerFadeInAnim = useRef(new Animated.Value(0)).current;
    const descFadeInAnim = useRef(new Animated.Value(0)).current;
    const contactFadeInAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(headerFadeInAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
        Animated.timing(descFadeInAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            delay: 300
        }).start();
        Animated.timing(contactFadeInAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            delay: 600
        }).start();
    }, []);

    const handlePhonePress = (phoneNumber: string) => {
        Linking.openURL(`tel:${phoneNumber}`).catch((error) => {
            alert('Could not open phone application!');
            console.log(error);
        });
    };

    const handleEmailPress = (mail: string) => {
        Linking.openURL(`mailto:${mail}`).catch((error) => {
            alert('Could not open any mail application!');
            console.log(error);
        });
    };

    const handleWebPress = (url: string) => {
        Linking.openURL(url).catch((error) => {
            alert('Could not open any browser application!');
            console.log(error);
        });
    };


    return (
        <ScrollView contentContainerStyle={{
            alignItems: 'center'
        }}>
            <View style={styles.container}>
                <Image style={styles.myImg} source={require('../../assets/my-img.jpeg')}/>
                    <Animated.Text style={[styles.header, {color: textColor, opacity: headerFadeInAnim}]}>{`Hi, \nI am Jan Rembikowski`}</Animated.Text>
                    <Animated.Text
                        style={[styles.text, {color: textColor, opacity: descFadeInAnim}]}>{`Computer science student combining technical skills with personal motivation. During my studies, I co-developed a machine learning model for lung cancer prediction. Witnessing the disease's impact firsthand fueled my passion to transform this project into accessible mobile and web app tools.`}</Animated.Text>
                    <Animated.View style={[styles.contactContainer, {opacity: contactFadeInAnim}]}>
                        <View style={styles.contactItemContainer}>
                            {ContactItemsData.map((item) => (
                                <View key={item.id}>
                                    <FontAwesome
                                        name={item.iconName}
                                        size={40}
                                        onPress={() => {
                                            if (item.name === 'Phone') {
                                                handlePhonePress(item.link);
                                            } else if (item.name === 'Mail') {
                                                handleEmailPress(item.link);
                                            } else if (item.name === 'GitHub' || item.name === 'LinkedIn') {
                                                handleWebPress(item.link);
                                            }
                                        }}
                                        color={textColor}
                                    />
                                </View>
                            ))}
                        </View>
                    </Animated.View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 30,
        gap: 20,
        alignItems: 'center',
        width: '100%'
    },
    header: {
        fontFamily: 'mon-b',
        fontSize: 28,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'mon',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40
    },
    myImg: {
        height: 160,
        aspectRatio: 4 / 4,
        borderRadius: 160 / 2,
    },
    contactContainer: {
        gap: 20
    },
    contactItemContainer: {
        marginTop: 40,
        flexDirection: 'row',
        gap: 40
    },
})

export default About;