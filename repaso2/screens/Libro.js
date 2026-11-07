import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  FlatList, 
  ImageBackground, 
  Image, 
  Alert, 
  ActivityIndicator, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
    return () => clearTimeout(temporizador);
  }, []);

  const manejarAgregarLibro = () => {
    
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setCargando(true);
    
    
    setTimeout(() => {
      const nuevoLibro = { id: Date.now().toString(), titulo, autor, genero };
      
      
      setLibros((librosPrevios) => [...librosPrevios, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      
      setCargando(false);
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  
  if (mostrarSplash) {
    return (
      <View style={estilos.contenedorSplash}>
        <Image 
          source={require('../assets/cargaa.jpg')}
          style={estilos.logoSplash}
          resizeMode="contain"
        />
        <Text style={estilos.tituloSplash}>Cargando...</Text>
      </View>
    );
  }

  
  return (
    <ImageBackground
      source={require('../assets/fondo.jpg')} 
      style={estilos.fondo}
    >
      <SafeAreaView style={estilos.capaOscura}>
        <Text style={estilos.encabezado}>Catálogo de Libros</Text>

        <View style={estilos.formulario}>
          <TextInput 
            style={estilos.entrada} 
            placeholder="Título del libro" 
            value={titulo} 
            onChangeText={setTitulo} 
            editable={!cargando}
          />
          <TextInput 
            style={estilos.entrada} 
            placeholder="Autor" 
            value={autor} 
            onChangeText={setAutor} 
            editable={!cargando}
          />
          <TextInput 
            style={estilos.entrada} 
            placeholder="Género" 
            value={genero} 
            onChangeText={setGenero} 
            editable={!cargando}
          />

          <Pressable 
            style={({ pressed }) => [estilos.boton, pressed && { opacity: 0.8 }]} 
            onPress={manejarAgregarLibro}
            disabled={cargando}
          >
            
            <Text style={estilos.textoBoton}>
              {cargando ? 'Cargando...' : 'Agregar Libro'}
            </Text>
          </Pressable>
        </View>

        <Text style={estilos.textoTotal}>Total de libros: {libros.length}</Text>


        
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.tarjetaLibro}>
              <Text style={estilos.tituloLibro}>{item.titulo}</Text>
              <Text style={estilos.detallesLibro}>Autor: {item.autor}</Text>
              <Text style={estilos.detallesLibro}>Género: {item.genero}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  contenedorSplash: {
    flex: 1,
    backgroundColor: '#6b1129',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSplash: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tituloSplash: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  capaOscura: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20,
  },
  encabezado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 20,
  },
  formulario: {
    marginBottom: 10,
  },
  entrada: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#1d4ed8', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoTotal: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contenedorCarga: {
    backgroundColor: 'rgba(80, 80, 80, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagenCarga: {
    width: 40,
    height: 40,
    marginBottom: 10,
    tintColor: '#ffffff',
  },
  textoCarga: {
    color: '#ffffff',
    marginTop: 2,
    fontSize: 16,
  },
  tarjetaLibro: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  tituloLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  detallesLibro: {
    fontSize: 14,
    color: '#333',
  },
});