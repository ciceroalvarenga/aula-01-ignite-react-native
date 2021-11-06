import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Tarefas({tarefa, ...rest}) {
  console.log(tarefa);
  return (
    <TouchableOpacity style={styles.buttonTarefa} {...rest}>
      <Text style={styles.textTarefa}>{tarefa}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTarefa: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textTarefa: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
