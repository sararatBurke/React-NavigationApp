import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){
   
    
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titileText}>{navigation.getParam('title')}</Text>
        </View>
    )
}
