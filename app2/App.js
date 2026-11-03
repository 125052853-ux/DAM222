import { TextInput, View } from "react-native";

export default function App(){
  const [texto, setTexto] = useState ('');

  return (

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="NOMBRE"
        value={texto}
        onChange={(text) => setTexto(text)}
        />
        <Text style={styles.resultado}></Text>
    </View>
  )
}