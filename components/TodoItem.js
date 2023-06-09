import React from "react";
import { StyleSheet,View ,Text, TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item} >
                <MaterialIcons name='delete' size={18} color={'red'}/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderWidth:1,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:"row",
        
    },
    text:{
        marginLeft:10,
        color:'gray'
    }

})