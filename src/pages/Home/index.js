import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

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

export default function Home() {
  return (
    <View style={styles.container}>
    <Header name="Henrique Rosa" />
    <Balance saldo="11.590,00" gastos="-2.395,50"/>
    <Text style={styles.title}>Últimas Movimentações</Text>
    <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsHorizontalScrollIndicator={false}
      renderItem={ ({item}) => <Movements data={item}/> }
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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    
  }

});
