import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Data({tipo}){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{tipo}</Text>
            <View style={styles.boxData}>
                <Text style={styles.subtitle}>Adicionar {tipo}</Text>
                <View style={styles.boxInput}>
                    <Text style={styles.inputText}>Nome</Text>
                    <TextInput style={styles.input} />

                </View>
                <View style={styles.boxInput2}>
                    <View>
                        <Text style={styles.inputText}>Valor</Text>
                        <TextInput style={styles.input2} keyboardType='numeric'/>
                    </View>
                    <View>
                        <Text style={styles.inputText}>Tipo</Text>
                        <TextInput style={styles.input2}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 14,
        marginRight: 14,
    },
    boxData: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8,
        
    },
    boxInput: {
        alignItems: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderRadius: 5,
        width: '100%',
        height: 30,
    },
    inputText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 6,
        marginTop: 6,
    },
    boxInput2: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        
        
    },
    input2: {
        backgroundColor: '#d9d9d9',
        width: 140,
        height: 25,
        borderRadius: 5,
        
    },
    button: {
        backgroundColor: '#861BFB',
        marginTop: 14,
        width: '32%',
        height: 30,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18,
        letterSpacing: 0.5,
    }
})