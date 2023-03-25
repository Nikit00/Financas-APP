import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 38;

export default function Registrer() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Gerencie suas receitas e despesas de forma simples e organizada.</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.titleForm}>Insira seus dados para cadastro</Text>
                <View style={styles.boxInput}>
                    <FontAwesome name="user" size={30} color="#861BFB" style={styles.icon} />
                    <TextInput placeholder="nome completo" style={styles.input} />
                </View>
                <View style={styles.boxInput}>
                    <MaterialIcons name="email" size={30} color="#861BFB" style={styles.icon} />
                    <TextInput placeholder="seuemail@exemplo.com" style={styles.input} />
                </View>
                <View style={styles.boxInput}>
                    <MaterialIcons name="lock" size={30} color="#861BFB" style={styles.icon} />
                    <TextInput placeholder="informe uma senha" style={styles.input} />
                </View>
                <View style={styles.boxInput}>
                    <MaterialIcons name="lock" size={30} color="#861BFB" style={styles.icon} />
                    <TextInput placeholder="repita a mesma senha" style={styles.input} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.textbutton}>Criar Conta</Text>
                </TouchableOpacity>
                <View style={styles.baseboard}>
                    <Text style={styles.text1}>Já tem uma conta?</Text>
                    <TouchableOpacity style={styles.buttonNewAccount} onPress={() => navigation.navigate('Welcome')}>
                        <Text style={styles.text2}>Faça seu login.</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#861BFB',
        paddingTop: statusBarHeight,
        flex: 1,
    },
    containerLogo: {
        backgroundColor: '#861BFB',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },

    titleForm: {
        fontSize: 18,
        marginTop: 12,
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 14,
    },
    subtitle: {
        color: '#FFF',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    boxInput: {
        marginTop: 12,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: '#861BFB',
        borderWidth: 1,
        borderRadius: 15,
        width: '80%',
        height: 48,
        justifyContent: 'flex-start',
        alignItems: 'center',
        

    },
    input: {
        fontSize: 18,
        marginRight: 18,
        marginLeft: 22,
    },
    icon:{
        marginLeft: 18,
    },
    button: {
        backgroundColor: '#861BFB',
        fontSize: 20,
        marginTop: 12,
        width: '80%',
        height: 48,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbutton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 2,
    },
    baseboard: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    text2: {
        fontWeight: 'bold',
        color: '#861BFB',
        fontSize: 18,

    },
    text1: {
        fontSize: 16,
        marginEnd: 8,
    }
})