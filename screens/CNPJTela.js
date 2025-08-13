import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import buscarCNPJCallBack from '../services/cnpj.js';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';

export default function CNPJTela() {
    const [cnpj, setCNPJ] = useState('');
    const [nome_socio, setSocios] = useState([]);
    const [ddd_fax, setddd_fax] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [nome_fantasia, setNomeFantasia] = useState('');

    useEffect(() => {
        if(cnpj.length === 14) {
            buscarCNPJCallBack(cnpj, dados => {
                console.log(dados);
                setSocios(dados.qsa);
                setddd_fax(dados.ddd_fax);
                setMunicipio(dados.municipio);
                setBairro(dados.bairro);
                setNumero(dados.numero);
                setNomeFantasia(dados.nome_fantasia);
            })
        }
    }, [cnpj]);

    return (
        <View style={estilo.container}>
            <TextInput style={estilo.input}
                placeholder='Digite um CNPJ...'
                maxLength={14}
                value={cnpj}
                onChangeText={text => setCNPJ(text)}
            />

            <View style={estilo.info}>
                {nome_socio.map((socio, index) => (
                    <View key={index} style={estilo.text}>
                        <Text>Nome do sócio: {socio.nome_socio}</Text>
                    </View>
                ))}
                <Text>DDD: {ddd_fax}</Text>
                <Text>Município: {municipio}</Text>
                <Text>Bairro: {bairro}</Text>
                <Text>Número: {numero}</Text>
                <Text>Nome Fantasia: {nome_fantasia}</Text>
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