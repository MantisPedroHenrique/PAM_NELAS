import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  TouchableOpacity } from 'react-native';
import React from "react";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
    
    },
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 20,
    },
    inputa:{
        backgroundColor: 'gray',
        height: 45  ,
        borderRadius: 5,
        width:300,
        marginBottom: 20,
    }
});

export const Home = () => {

    return (
    
    <View style={styles.container}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput style={styles.inputa}/>
        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.inputa}/>
    </View>

    );

};

