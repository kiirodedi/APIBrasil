import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';

import buscarCNPJCallBack from '../services/cnpj.js';

export default function CNPJTela() {
    const [cnpj, setCNPJ] = useState('');
    const [nome_socio, setSocios] = useState([]);
    const [ddd_fax, setddd_fax] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [nome_fantasia, setNomeFantasia] = useState('');

    useEffect(() => {
        if (cnpj.length === 14) {
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

            <ScrollView contentContainerStyle={estilo.scrollContent} style={estilo.scrollView}>
                <View style={estilo.info}>
                    {nome_socio.map((socio, index) => (
                        <View key={index}>
                            <Text style={estilo.tit_info}>Nome do sócio:</Text>
                            <Text style={estilo.res_info}>{socio.nome_socio}</Text>
                        </View>
                    ))}
                    <Text style={estilo.tit_info}>DDD</Text>
                    <Text style={estilo.res_info}>{ddd_fax}</Text>
                    <Text style={estilo.tit_info}>Município:</Text>
                    <Text style={estilo.res_info}>{municipio}</Text>
                    <Text style={estilo.tit_info}>Bairro:</Text>
                    <Text style={estilo.res_info}>{bairro}</Text>
                    <Text style={estilo.tit_info}>Número:</Text>
                    <Text style={estilo.res_info}>{numero}</Text>
                    <Text style={estilo.tit_info}>Nome Fantasia:</Text>
                    <Text style={estilo.res_info}>{nome_fantasia}</Text>
                </View>
            </ScrollView>

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

    scrollView: {
        width: '100%',
        paddingHorizontal: 20,
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
        marginLeft: 13,
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