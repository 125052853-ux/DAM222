/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


/*2.- Zona main */
export default function SafeScreen() {
  return (
    <View style={styles.container}>
     
     <Text>Aqui va la practica uriel</Text>

      <StatusBar style="auto" />
    </View>
  );
}

/*3.- Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor:'blue'},
  tarjeta2:{backgroundColor:'orange'},
  tarjeta3:{backgroundColor:'green'},
});
