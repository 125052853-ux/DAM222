import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SwitchEjemplo({ oscuro, cambiarModo }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { color: oscuro ? '#ffffff' : '#000000' }]}>
        Modo Oscuro
      </Text>
      <Switch value={oscuro} onValueChange={cambiarModo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justify: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});