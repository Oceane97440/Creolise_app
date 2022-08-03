import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Patienter... </Text>
            <ActivityIndicator size="large" color="#FFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d43d35"
    },
    text: {
        color: "#FFF",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    }
});

export default LoadScreen