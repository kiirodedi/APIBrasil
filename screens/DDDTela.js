import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import * as objDDD from '../services/ddd.js';
import CardDDD from '../components/cardDDD';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-web';
import { FlashList } from '@shopify/flash-list';

export default function DDDTela() {
  const[ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if(ddd.length === 2) {
      objDDD.buscarDDDCallBack(ddd, dados => {
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
      })
    }
  }, [ddd]);
  
  return (
    <View style={estilo.container}>
      <TextInput style={estilo.input}
        placeholder='Digite um DDD...'
        maxLength={2}
        value={ddd}
        onChangeText={text => setDDD(text)}
      />

    <View style={estilo.lista}>
      <FlashList
        data={cities}
        renderItem={({ item, index }) => 
          <CardDDD
            key={index}
            nome={item}
            uf={uf}
          />
        }
        estimatedItemSize={200}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
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