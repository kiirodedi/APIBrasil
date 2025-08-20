import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardFeriado = ({ data, nome, tipo}) => {
    return (
        <View style={estilo.card}>
            <Text style={estilo.nome}>{nome}</Text>
            <Text style={estilo.data}>{data}</Text>
            <Text style={estilo.tipo}>{tipo}</Text>
        </View>
    );
};

export default CardFeriado;

const estilo = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
    },
    nome: {
        color: '#000922',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    data: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#002ba0',
        marginBottom: 5,
    },
    tipo: {
        fontSize: 16,
        color: '#002ba0ae',
    },
});