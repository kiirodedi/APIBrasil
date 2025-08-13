import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function TelaInicial() {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Bem-vindo ao App de Consulta de APIs Brasileiras!</Text>
        <Text style={estilo.subtitulo}>Use o menu lateral para navegar entre as diferentes consultas disponíveis.</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        color: '#000922',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#002ba0ae',
    }
});