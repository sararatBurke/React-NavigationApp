import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Home() {
   
    return (
        <View style={styles.container}>
            <Text style={styles.headTitle}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    headTitle:{
        fontFamily: 'Roboto-medium',
        color: '#e43d32'
    }
})

