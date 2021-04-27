import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }
   
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titileText}>Home Screen</Text>
            <Button title="review detail" onPress={pressHandler}></Button>
        </View>
    );
}


