/*1.- Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';


/*2.- Zona main */
export default function MenuScreen() {

    const[screen,setScreen]= useState('menu');

    switch(screen){
        case 'tarjetas':
            return <Tarjetas/>
        case 'safescreen':
            return <SafeScreen/>
        case 'menu':
            default:
                return (
    <View style={styles.container}>
     
        <Text> Menu de practicas </Text>

        <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
        <Button title='SafeScreen' onPress={()=>setScreen('safescreen')}></Button>
        <Button title='TextInput' onPress={()=>setScreen('textinput')}></Button>
        <Button title='FlatList ' onPress={()=>setScreen('flatlist')}></Button>
        <Button title='ImageBackgroung ' onPress={()=>setScreen('imagebackground')}></Button>
        <Button title='Modal' onPress={()=>setScreen('modal')}></Button>
        <Button title='ActivityIndicator' onPress={()=>setScreen('activityindicator')}></Button>

      <StatusBar style="auto" />
    </View>
  );
}
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
}
);
