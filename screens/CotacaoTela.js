import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import buscarCotacaoCallBack from '../services/cotacao.js';
import { TextInput } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';    

export default function CotacaoTela() {
    const [moeda, setMoeda] = useState('');
    const [data, setData] = useState('');
    const [cotacao, setCotacao] = useState(null);

    const BuscarDados = () => {
        if (moeda.length === 3 && data.length > 0) {
            buscarCotacaoCallBack(moeda, data, (dados) => {
                console.log(dados);
                if (dados && dados.cotacoes && dados.cotacoes.length > 0) {
                    setCotacao(dados.cotacoes[0]);
                } else {
                    setCotacao(null);
                }
            });
        }
    };
    return (
        <View style={estilo.container}>
            <TextInput style={estilo.input}
                placeholder='Digite uma moeda (Ex.: USD)'
                maxLength={3}
                value={moeda}
                onChangeText={text => setMoeda(text)}
            />

            <TextInput style={estilo.input}
                placeholder='Digite uma data (Ex.: 2023-10-01)'
                value={data}
                onChangeText={text => setData(text)}
            />

        <Button style={{ marginBottom: 10 }}
                title="Buscar Cotação"
                onPress={BuscarDados}
            />

            {cotacao && (
            <View style={estilo.info}>
                <Text style={estilo.tit_info}>Moeda:</Text>
                <Text style={estilo.res_info}>{moeda}</Text>
                <Text style={estilo.tit_info}>Cotação Venda:</Text>
                <Text style={estilo.res_info}> {cotacao.cotacao_venda}</Text>
                <Text style={estilo.tit_info}>Cotação Compra:</Text>
                <Text style={estilo.res_info}> {cotacao.cotacao_compra}</Text>
            </View>
        )}
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
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        marinTop: 100,
                paddingRight: 10,
        paddingLeft: 10,
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