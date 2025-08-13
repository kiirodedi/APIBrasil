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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
    },

    cidade: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000922',
    },
    
    uf: {
        fontSize: 16,
        color: '#002ba0ae',
    },
});