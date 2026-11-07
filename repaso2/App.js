/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Libro from './screens/Libro';

/*2.- Zona main */
export default function MenuScreen() {

    const [screens, setScreens] = useState('menu');

    switch(screens){
        case 'catalogo':
            return <Libro/>

        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text> Menu de practicas </Text>

                    <Button title='Catalogo' onPress={() => setScreens('catalogo')}></Button>

                    <StatusBar style="auto" />
                </View>
            );
    }
}

/*3.- Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});