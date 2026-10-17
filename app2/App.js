/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

/*2.- Zona main */
export default function App() {
  return (
    <View style={styles.container}>
    
      <Perfil nombre="Antonio" carrera="ITIID" cuatrimestre="4" materia="Movil"/>

      <Perfil nombre="Uriel" carrera="ITIID" cuatrimestre="4" materia="Movil"/>

      <Perfil nombre="Cesar" carrera="ITIID" cuatrimestre="4" materia="Movil"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

/*3.- Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
