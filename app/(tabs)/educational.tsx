import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, Linking, ScrollView, StyleSheet, Text, View} from "react-native";
import {useColorScheme} from "@/components/useColorScheme";
import Colors from "@/constants/Colors/Colors";
import cancerDataItem, {cancerImpact, preventionImportance} from "@/constants/tabs/Educational";
import SecondaryButton from "@/components/SecondaryButton";
import {getTextColor} from "@/constants/Colors/Helpers";

function Educational() {
    const colorScheme = useColorScheme();
    const textColor = getTextColor();
    const headerAnim = useRef(new Animated.Value(0)).current;
    const firstListAnim = useRef(new Animated.Value(-1000)).current;
    const secondListAnim = useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(headerAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
        Animated.sequence([
            Animated.timing(firstListAnim, {
                toValue: 10,
                duration: 750,
                useNativeDriver: true,
                delay: 400
            }),
            Animated.timing(firstListAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true
            })
        ]).start();
        Animated.sequence([
            Animated.timing(secondListAnim, {
                toValue: 10,
                duration: 750,
                useNativeDriver: true,
                delay: 600
            }),
            Animated.timing(secondListAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true
            })
        ]).start();
        return () => {
            headerAnim.setValue(0);
            firstListAnim.setValue(-1000);
            secondListAnim.setValue(-1000);
        };
    }, []);

    const openUrl = (url: string) => {
        Linking.openURL(url).catch((error) => {
            console.error(error);
            alert('Could not open any browser')
        });
    }

    const listItem = ({item}: {
        item: cancerDataItem
    }) => (
        <View style={styles.listItemContainer}>
            <Text style={[styles.listItemTitle, {color: textColor}]}>{`\u2022 ${item.title} `}
                <Text style={[styles.listItemDesc, {color: textColor}]}>- {item.desc}</Text>
            </Text>
        </View>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <Animated.Text style={[styles.header1, {color: textColor, opacity: headerAnim}]}>Why is lung cancer prevention so important?</Animated.Text>
                <Animated.View style={[styles.listContainer, {transform: [{translateX: firstListAnim}]}]}>
                    <Text style={[styles.header2, {color: textColor}]}>Devastating Impact:</Text>
                    <FlatList scrollEnabled={false} data={cancerImpact} renderItem={listItem}
                              keyExtractor={(item) => item.id}/>
                    <SecondaryButton
                        bgColor={colorScheme === 'dark' ? Colors.dark.secondaryBackground : Colors.light.secondaryBackground}
                        onPress={() => openUrl('https://www.wcrf.org/cancer-trends/lung-cancer-statistics/')}
                        text={`Lung Cancer\n Statistics`} colorScheme={colorScheme} styles={styles.linkButton}
                        textSize={20}/>
                </Animated.View>
                <Animated.View style={[styles.listContainer, {transform: [{translateX: secondListAnim}]}]}>
                    <Text style={[styles.header2, {color: textColor}]}>Crucial importance of prevention:</Text>
                    <FlatList scrollEnabled={false} data={preventionImportance} renderItem={listItem}
                              keyExtractor={(item) => item.id}/>
                    <SecondaryButton
                        bgColor={colorScheme === 'dark' ? Colors.dark.secondaryBackground : Colors.light.secondaryBackground}
                        onPress={() => openUrl('https://www.cancer.org/cancer/types/lung-cancer/causes-risks-prevention/prevention.html')}
                        text={`More prevention\n advices`} colorScheme={colorScheme} styles={styles.linkButton} textSize={20}/>
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
        gap: 28
    },
    listContainer: {
        gap: 20
    },
    listItemContainer: {
        flexDirection: 'row',
        marginBottom: 12
    },
    text: {
        fontFamily: 'mon-sb',
    },
    header1: {
        fontFamily: 'mon-b',
        fontSize: 38,
        textAlign: 'center',
    },
    header2: {
        fontFamily: 'mon-b',
        fontSize: 26,
        textAlign: 'left',
    },
    listItemTitle: {
        fontFamily: 'mon-sb',
        fontSize: 22
    },
    listItemDesc: {
        fontFamily: 'mon'
    },
    linkButton: {
        borderRadius: 20,
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 25
    }
})

export default Educational;
