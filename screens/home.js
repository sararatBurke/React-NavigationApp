import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){
    const[review, setReview] = useState([
        {key:'1', title:'Home', body:'Home Screen'},
        {key:'2', title:'Review', body:'Review detail Screen'},
        {key:'3', title:'About', body:'About Screen'}
   
    ])
    return(
        <View style={globalStyles.container}>
            
            <FlatList
            data={review}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titileText}>{ item.title }</Text>
                </TouchableOpacity>
            )}>    
            </FlatList>
            
        </View>
    )
}
