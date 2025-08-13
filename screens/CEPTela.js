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
                <Text style={estilo.tit_info}>ESTADO: </Text>
                <Text style={estilo.res_info}>{state}</Text>
                <Text style={estilo.tit_info}>CIDADE:</Text>
                <Text style={estilo.res_info}>{city}</Text>
                <Text style={estilo.tit_info}>BAIRRO:</Text>
                <Text style={estilo.res_info}>{neighborhood}</Text>
                <Text style={estilo.tit_info}>RUA:</Text>
                <Text style={estilo.res_info}>{street}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dbe5ff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 30,
    },

    input: {
      height: 40,
      width: '80%',
      textAlign: 'center',
      marginVertical: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
    },

    info: {
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    tit_info: {
        fontSize: 14,
        color: '#002ba0ae',
        backgroundColor: '#dbe5ff',
        fontWeight: 'bold',
        marginVertical: 5,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },

    res_info: {
        fontSize: 18,
        color: '#000922',
        marginHorizontal: 10,
    },
});