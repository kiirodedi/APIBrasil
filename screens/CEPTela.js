import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import buscarCEPCallBack from '../services/cep.js';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';

export default function CEPTela() {
    const [cep, setCEP] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');

    useEffect(() => {
        if(cep.length === 8) {
            buscarCEPCallBack(cep, dados => {
                console.log(dados);
                setState(dados.state);
                setCity(dados.city);
                setNeighborhood(dados.neighborhood);
                setStreet(dados.street);
            })
        }
    }, [cep]);

    return (
        <View style={estilo.container}>
            <TextInput style={estilo.input}
                placeholder='Digite um CEP...'
                maxLength={8}
                value={cep}
                onChangeText={text => setCEP(text)}
            />

            <View style={estilo.info}>
                <Text>Estado: {state}</Text>
                <Text>Cidade: {city}</Text>
                <Text>Bairro: {neighborhood}</Text>
                <Text>Rua: {street}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    info: {
        width: '90%',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});