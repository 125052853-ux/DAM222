/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*2.- Zona main */
export default function App() {
  return (

    <MenuScreen></MenuScreen>

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
