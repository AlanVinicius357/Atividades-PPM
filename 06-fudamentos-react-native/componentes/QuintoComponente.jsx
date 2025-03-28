import React from "react";
import {View, Text} from 'react-native';

export default function ListadeItens(){
    const lista = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
    return (
        <View>
            {lista.map((item, index) => (
                <Text key={index}>{item}</Text>
        ))}
        </View>
    );
}
