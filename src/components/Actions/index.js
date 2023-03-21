import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default function Actions(){
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Ionicons name="add-circle" size={50} color="#2ecc71"/>
                </View>
                <Text style={styles.labelButton}>Adicionar Entrada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Ionicons name="remove-circle" size={50} color="#e74c3c"/>
                </View>
                <Text style={styles.labelButton}>Adicionar Saida</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 82,
        marginBottom: 14,
        marginTop: 18,
        paddingStart: 14,
        paddingEnd: 14,
    },

    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 60/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})