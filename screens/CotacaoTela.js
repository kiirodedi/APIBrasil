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

            <Button
                title="Buscar Cotação"
                onPress={BuscarDados}
            />

            {cotacao && (
            <View style={estilo.info}>
            <Text>Moeda: {moeda}</Text>
            <Text>Cotação Venda: {cotacao.cotacao_venda}</Text>
            <Text>Cotação Compra: {cotacao.cotacao_compra}</Text>
            </View>
        )}
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