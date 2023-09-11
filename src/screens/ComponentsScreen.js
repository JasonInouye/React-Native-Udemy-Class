import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Jason'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native! </Text>
            <Text style={styles.subHeadertextStyle}>My name is {myName}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeadertextStyle: {
        fontSize: 20
    },
});

export default ComponentsScreen;