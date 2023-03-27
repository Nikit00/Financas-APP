import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 38;

export default function Help(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerLogo}
            animation="bounceIn"
            duration={1500}
            >
                <Image source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Gerencie suas receitas e despesas de forma simples e organizada.</Text>
            </Animatable.View>

        <Animatable.View style={styles.containerForm}
        animation="flash"
        duration={1000}
        >
            <Text style={styles.titleForm}>Esqueceu a senha?</Text>
            <Text style={styles.titleForm}>Caso você tenha esquecido a senha, insira o email cadastrado e clique no botão abaixo
                 para receber um email com um link para redefinir sua senha.
            </Text>
            <View style={styles.boxInput}>
                <MaterialIcons name="email" size={30} color="#861BFB" />
                <TextInput placeholder="seuemail@exemplo.com" style={styles.input} />
            </View>
          
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.textbutton}>Redefinir a senha</Text>
            </TouchableOpacity>
            <View style={styles.baseboard}>
                <Text style={styles.text1}>Lembrou a senha?</Text>
                <TouchableOpacity style={styles.buttonNewAccount} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.text2}>Faça seu login.</Text>
                </TouchableOpacity>

            </View>
        </Animatable.View>


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
        marginTop: 16,
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
        marginTop: 18,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: '#861BFB',
        borderWidth: 1,
        borderRadius: 15,
        width: '80%',
        height: 55,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    input: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#861BFB',
        fontSize: 20,
        marginTop: 22,
        width: '80%',
        height: 55,
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
        
    },
    baseboard: {
        flexDirection: 'row',
        marginTop: 22,
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