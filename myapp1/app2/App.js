/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/*2.- Zona main */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native !</Text>
      <Image source={require("./assets/wave.png")}></Image>
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
