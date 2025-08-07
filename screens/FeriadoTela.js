import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import buscarFeriadoCallBack from '../services/feriado.js';
import CardFeriado from '../components/CardFeriado.js';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';
import { FlashList } from '@shopify/flash-list';

export default function FeriadoTela() {
    const [ano, setAno] = useState('');
    const [feriados, setFeriados] = useState([]);


    useEffect(() => {
        if(ano.length === 4) {
            buscarFeriadoCallBack(ano, listaDeferiados => {
                console.log(listaDeferiados);
                setFeriados(listaDeferiados);
            })
        }
    }, [ano]);
 
    return (
        <View style={estilo.container}>
            <TextInput style={estilo.input}
                placeholder='Digite um ano...'
                maxLength={4}
                value={ano}
                onChangeText={text => setAno(text)}
            />
            <View style={estilo.lista}>
                <FlashList
                    data={feriados}
                    renderItem={({ item, index }) => 
                        <CardFeriado
                            key={index}
                            data={item.date}
                            nome={item.name}
                            tipo={item.type}
                        />
                    }
                    
                />
            </View>
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
  
    lista: {
      flex: 1,
      width: '100%',
    },
  
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '80%',
      textAlign: 'center',
      marginVertical: 10,
    },
  });