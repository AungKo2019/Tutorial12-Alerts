import React from "react";
import {View,Text,StyleSheet} from 'react-native';

export default function Sandbox(){
    return (
            <View style={styles.container}>
                <Text style={styles.boxOne}>One</Text>
                <Text style={styles.box2}>Two</Text>
                <Text style={styles.box3}>Three</Text>
                <Text style={styles.box4}>Four</Text>
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40,
        backgroundColor:'#ddd'    
    },
    boxOne:{
        flex:4,
        backgroundColor:'violet',
        padding:10,
    },
    box2:{
        flex:1,
        backgroundColor:'gold',
        padding:20,
    },
    box3:{
        flex:1,
        backgroundColor:'coral',
        padding:30,
    },
    box4:{
        flex:1,
        backgroundColor:'skyblue',
        padding:40,
    }

})