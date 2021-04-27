import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){
    const pressHandler = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titileText}>ReviewDetails screen</Text>
            <Button title="Home" onPress={pressHandler}></Button>
        </View>
    )
}
