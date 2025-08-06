import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDDD = ({ nome, uf }) => {
    return (
        <View style={estilo.card}>
            <Text style={estilo.cidade}>{nome}</Text>
            <Text>-</Text>
            <Text style={estilo.uf}>{uf}</Text>
        </View>
    );
};

export default CardDDD;

const estilo = StyleSheet.create({
    card: {
        flexDirection: 'row', // Alinha os itens lado a lado
        justifyContent: 'space-between', // Espaço entre os itens
        alignItems: 'center', // Alinha verticalmente no centro
        backgroundColor: '#f0f0f0', // Cor de fundo do card
        padding: 15, // Espaçamento interno
        marginVertical: 5, // Margem vertical entre os cards
        marginHorizontal: 10, // Margem horizontal
        borderRadius: 8, // Borda arredondada // Elevação para Android
    },
    cidade: {
        fontSize: 16, // Tamanho da fonte
        fontWeight: 'bold', // Deixa a fonte em negrito
        color: '#333', // Cor do texto
    },
    uf: {
        fontSize: 16,
        color: '#666',
    },
});