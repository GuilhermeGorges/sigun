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
      <View style={styles.imageContainer}>
        <Image style={styles.hero} source={require('../assets/home.jpg')} />
        <Text style={styles.overlayTitle}> SIGUN </Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}> LOGIN </Text>
        <TextInput style={styles.input} value={mail} onChangeText={setMail} placeholder='Usuário' />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Senha' secureTextEntry />
        <Button onPress={handleLogin}>
          ENTRAR
        </Button>
        <Text>
          {erro}
        </Text>
      </View>
    </View>
  );
}
