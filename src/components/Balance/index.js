import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Balance({saldo, gastos}){
    return (
        <Animatable.View style={styles.container}
        animation="rotate"
        duration={1000}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}> 
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>
        </Animatable.View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingBottom: 22,
        paddingTop: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6,
    },

    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c',
    }
})