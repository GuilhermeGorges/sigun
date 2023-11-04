import { Text, TextInput, View, Image } from 'react-native';

import Button from '../components/Button.jsx';
import { styles } from '../styles/styles.js';
import { AuthContext } from '../context/AuthContext.js';
import { useContext, useState } from 'react';

export default function Login({ navigation }) {
  const { logar } = useContext(AuthContext)
  const [erro, setErro] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    const res = logar(mail, password)
    if (res === "success") {
      navigation.navigate('LoggedArea')
    } else {
      setErro(res)
    }
  }

  return (
    <View style={styles.main}>
      <Image style={styles.hero} source={require('../assets/home.png')} />
      <View style={styles.container}>
        <Text style={styles.title}> Sistema </Text>
        <Text style={styles.title}> Comanda </Text>
        < TextInput style={styles.input} value={mail} onChangeText={setMail} placeholder='email' />
        < TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='senha' secureTextEntry />
        <Button onPress={handleLogin}>
          entrar
        </Button>
        <Text>
          {erro}
        </Text>
      </View>
    </View>
  );
}
