import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import Data from '../../components/Data';


const list = [
    {
        id: 1,
        label: 'Equatorial',
        value: '280,90',
        date: '04/03/2023',
        type: 0 // gastos / saida
    },
    {
        id: 2,
        label: 'Pix Gabriel Nascimento',
        value: '500,00',
        date: '08/03/2023',
        type: 1 // saldo / entrada
    },
    {
        id: 3,
        label: 'Salario',
        value: '5.600,00',
        date: '10/03/2023',
        type: 1 // saldo / entrada
    },
]

export default function Add() {
    return (
        <View style={styles.container}>
            <Header name="Henrique Rosa" />
            <Balance saldo="11.590,00" gastos="-2.395,50" />
            <Actions colorAdd="#2ecc71" colorRemove="#FFF" />
            <Data tipo="Entrada" />
            <Text style={styles.title}>Últimos Registros</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        flex: 2,
        marginStart: 14,
        marginEnd: 14,

    }

});
