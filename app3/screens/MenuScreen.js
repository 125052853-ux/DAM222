/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

// Importaciones de tus prácticas
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import PressableSwitch from './PressableSwitch';
import SectionListScreen from './SectionListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen'; 

/*2.- Zona main */
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <Tarjetas />;

    case 'safescreen':
      return <SafeScreen />;

    case 'pressable':
      return <PressableSwitch />;

    case 'flatlist':
      return <SectionListScreen />;

    case 'imagebackground':
      return <ImageBackgroundScreen />;

    case 'activityindicator':
      return <ActivityIndicatorScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text>Menu de practicas</Text>
          
          <Button title="Tarjetas" onPress={() => setScreen('tarjetas')} />
          <Button title="SafeScreen" onPress={() => setScreen('safescreen')} />
          <Button title="Pressable" onPress={() => setScreen('pressable')} />
          <Button title="FlatList" onPress={() => setScreen('flatlist')} />
          <Button title="ImageBackground" onPress={() => setScreen('imagebackground')} />
          <Button title="ActivityIndicator" onPress={() => setScreen('activityindicator')} />
          
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
  },
  tarjeta1: { backgroundColor: 'blue' },
  tarjeta2: { backgroundColor: 'orange' },
  tarjeta3: { backgroundColor: 'green' },
});