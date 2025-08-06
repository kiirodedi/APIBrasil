import { StyleSheet, Text, View } from "react-native";

const CardDDD = ({ nome, uf}) => {
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: "80%",
    },
    cidade: {
        fontSize: 18,
        fontWeight: "bold",
    },
    uf: {
        fontSize: 16,
        color: "#555",
    },
});