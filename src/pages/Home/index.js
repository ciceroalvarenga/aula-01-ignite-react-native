import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Tarefas} from '../../components/Tarefas';
import {styles} from './styles';

export function Home() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [minhaTarefa, setMinhaTarefa] = useState([]);

  function adicionaNovaTarefa() {
    setMinhaTarefa(statoAntigo => [...statoAntigo, novaTarefa]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boas Vindas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa"
        placeholderTextColor="#555"
        onChangeText={setNovaTarefa}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={adicionaNovaTarefa}>
        <Text style={styles.buttonText}>add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>Minhas Tarefas</Text>

      <FlatList
        data={minhaTarefa}
        keyExtractor={item => item}
        renderItem={({item}) => <Tarefas tarefa={item} />}
      />
    </View>
  );
}
