
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/styles'; // Certifique-se de importar os estilos necessários.
import Button from '../components/Button.jsx';

export default function CadastroUser({ navigation }) {
    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
  
    const cadastrarUsuario = () => {
    };
  
    return (
      <View style={styles.main}>

        <View style={styles.cadastroLeft}>
        </View>


        <View style={styles.cadastroRight}>
          <Text style={styles.title}>Cadastro de Usuário</Text>
    
          {/* Nome */}
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
    
          {/* Username */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
    
          {/* Senha */}
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
    
          <Button onPress={cadastrarUsuario}>
            Cadastrar Usuário
          </Button>

        </View>
      </View>
    );
  }
  