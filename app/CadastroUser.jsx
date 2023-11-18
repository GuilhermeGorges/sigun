import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, Pressable, FlatList, Alert, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'; 
import Button from '../components/Button.jsx';
import ModalCadastro from '../components/ModalCadastro';

import { listarUsuarios, excluirUsuario } from '../services/api.js';

export default function CadastroUser({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    try {
      const listaUsuarios = await listarUsuarios();
      setUsuarios(listaUsuarios);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error.message);
    }
  };


  const handleExcluirUsuario = async (userId) => {
    try {
      await excluirUsuario(userId);
      carregarUsuarios();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error.message);
    }
  };

  const confirmarExclusao = (userId) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Deseja realmente excluir este usuário?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => handleExcluirUsuario(userId) },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
      <Text>{item.username}</Text>
      <Text>{item.perfil}</Text>
      <TouchableOpacity onPress={() => confirmarExclusao(item.id)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    carregarUsuarios();
  }, []); 
  return (
    <View style={styles.main}>

      <View style={styles.cadastroLeft}>
        <Text style={styles.titleRoxo}>Cadastro de Pessoas</Text>
        <Pressable onPress={() => navigation.navigate('LoggedArea')}>
          <MaterialIcons name="exit-to-app" size={24} color="#FFFFFF" />
        </Pressable>
      </View>

      <View style={styles.cadastroRight}>
        <ModalCadastro modalVisible={modalVisible}>
        
        </ModalCadastro>


        <FlatList
          data={usuarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <Button onPress={() => setModalVisible(true)} modalVisible={modalVisible}>
          <Text style={styles.titleRoxo}>Adicionar Usuário</Text>
        </Button>
      </View>
    </View>
  );
}
