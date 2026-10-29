import { StatusBar } from 'react-native';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';

/* Zona main */
export default function SafeScrean(){
  return(

    <SafeAreaView style={style.safeArea}>
      <ScrollView contentContainerStyle={style.scrollContent}>

        <Text style={style.title}>Practica en equipo</Text>
        <Text style={style.subtitle}>Desliza hacia abajo para ver mas</Text>

        {[...Array(15)].map((_, index) => (
          <View key={index} style={style.box}>
            <Text>Registro de prueba {index + 1}</Text>
          </View>
        ))}

        <StatusBar style="auto"/>
      </ScrollView>
    </SafeAreaView>
  );
}