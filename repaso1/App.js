import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Alert, Button, Switch } from 'react-native';

export default function App() {
  
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [asisteTaller, setAsisteTaller] = useState(false);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaEnDeportes, setParticipaEnDeportes] = useState(false);


  const registrarEvento = () => {
    if(!nombre.trim() || !carrera.trim() || !semestre.trim()){
      Alert.alert(
        'Campos incompletos',
        'Debes llenar todos los campos'
      );
      return;
    }

    if(isNaN(Number(semestre))){
      Alert.alert(
        'Error',
        'El semestre debe ser un numero'
      );
      return;
    }

    const mensaje = 
      `Nombre: ${nombre}\n` +
      `Carrera: ${carrera}\n` +
      `Semestre: ${semestre}\n\n` +
      `Taller: ${asisteTaller ? 'Sí' : 'No'}\n` +
      `Constancia: ${requiereConstancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${participaEnDeportes ? 'Sí' : 'No'}`;

    Alert.alert('Registro enviado', mensaje);

  }
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Text style={styles.titulo}>REGISTRO DE EVENTO UNIVERSITARIO</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.titulo}>OPCIONES</Text>
    <View style={styles.row}>
      <Text style={styles.texto}>¿Asistirá a taller?</Text>
          <Switch 
            value={asisteTaller} 
            onValueChange={setAsisteTaller}
          />
    </View>

    <View style={styles.row}>
      <Text style={styles.texto}>¿Requiere constancia?</Text>
      <Switch
        value={requiereConstancia}
        onValueChange={setRequiereConstancia}     
      />
    </View>     
    
    <View style={styles.row}>
      <Text style={styles.texto}>¿Participará en actividades deportivas?</Text>
      <Switch
        value={participaEnDeportes}
        onValueChange={setParticipaEnDeportes}
      />
    </View>

    <View style={styles.buttonContainer}>
      <Button title='Enviar Registro' onPress={registrarEvento}/>
    </View>
    
      
      
      <StatusBar style="auto" />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10, 
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15, 
  },

  safeContainer: {
    flex: 1,
    backgroundColor:'#5de733',
  },

  texto: {
    textAlign: 'left',
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 15,
  },
});