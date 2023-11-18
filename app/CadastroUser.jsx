
import React, { useState, useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, Picker  } from 'react-native';
import { styles } from '../styles/styles'; 
import Button from '../components/Button.jsx';
import { AuthContext } from '../context/AuthContext.js';

import { cadastrarUsuarios } from '../services/api.js';

export default function CadastroUser({ navigation }) {
    const { user } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [perfil, setPerfil] = useState('');
  
    const cadastrarUsuario = async () => {
      try {
        await cadastrarUsuarios(username, senha, perfil, nome);

        navigation.navigate('LoggedArea');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.message);
      }
    }
  
    return (
      <View style={styles.main}>

        <View style={styles.cadastroLeft}>
          <Text style={styles.titleRoxo}>Cadastro de Pessoas</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoggedArea')}>
            <MaterialIcons name="exit-to-app" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>


        <View style={styles.cadastroRight}>
    
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
    
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
    
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />          
        
        {user.profileType === 'ADMINISTRACAO' && (
          <View style={styles.input}>
            <Text>Perfil</Text>
            <Picker
              selectedValue={perfil}
              onValueChange={(itemValue) => setPerfil(itemValue)}
            >
              <Picker.Item label="Selecione o perfil" value="" />
              <Picker.Item label="PROFESSOR" value="PROFESSOR" />
              <Picker.Item label="ADMINISTRACAO" value="ADMINISTRACAO" />
              <Picker.Item label="ALUNO" value="ALUNO" />
            </Picker>
          </View>
        )}
    
          <Button onPress={cadastrarUsuario}>
            Cadastrar Usuário
          </Button>

        </View>
      </View>
    );
  }
  