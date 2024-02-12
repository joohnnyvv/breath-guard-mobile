import React from 'react';
import {View, Text, StyleSheet, FlatList, Button, Linking, ScrollView} from "react-native";
import {useColorScheme} from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import cancerDataItem, {cancerImpact, preventionImportance} from "@/constants/tabs/EduData";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

function Educational() {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'dark' ? Colors.dark.text : Colors.light.text;

    const openUrl = (url: string) => {
        Linking.openURL(url);
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
                <Text style={[styles.header1, {color: textColor}]}>Why is lung cancer prevention so important?</Text>
                <View style={styles.listContainer}>
                    <Text style={[styles.header2, {color: textColor}]}>Devastating Impact:</Text>
                    <FlatList scrollEnabled={false} data={cancerImpact} renderItem={listItem}
                              keyExtractor={(item) => item.id}/>
                </View>
                <SecondaryButton
                    bgColor={colorScheme === 'dark' ? Colors.dark.secondaryBackground : Colors.light.secondaryBackground}
                    onPress={() => openUrl('https://www.wcrf.org/cancer-trends/lung-cancer-statistics/')}
                    text={`Lung Cancer\n Statistics`} colorScheme={colorScheme} styles={styles.linkButton}
                    textSize={20}/>
                <View style={styles.listContainer}>
                    <Text style={[styles.header2, {color: textColor}]}>Crucial importance of prevention:</Text>
                    <FlatList scrollEnabled={false} data={preventionImportance} renderItem={listItem}
                              keyExtractor={(item) => item.id}/>
                </View>
                <SecondaryButton
                    bgColor={colorScheme === 'dark' ? Colors.dark.secondaryBackground : Colors.light.secondaryBackground}
                    onPress={() => openUrl('https://www.cancer.org/cancer/types/lung-cancer/causes-risks-prevention/prevention.html')}
                    text={`More prevention\n advices`} colorScheme={colorScheme} styles={styles.linkButton} textSize={20}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 20,
        gap: 18
    },
    listContainer: {
        gap: 12
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
