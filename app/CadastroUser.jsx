import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, Pressable, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { alert } from '../hooks/alert.js'

import { styles } from '../styles/styles';
import { listarUsuarios, excluirUsuario } from '../services/api.js';

import Button from '../components/Button.jsx';
import ModalCadastro from '../components/ModalCadastro';

const isMobile = Dimensions.get('window').width < 600;

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
    alert(
      'Confirmar Exclusão',
      'Deseja realmente excluir este usuário?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            handleExcluirUsuario(userId);
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.username}</Text>
      <Text style={styles.itemText}>{item.profileType}</Text>
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
        <Text style={styles.title}>Cadastro de Pessoas</Text>

        
        <View  style={styles.schoolIconContainer}>
            <Text style={isMobile ? styles.overlayTitleMobile : styles.overlayTitle}> SIGUN </Text>
            <MaterialIcons name="school" style={isMobile ? styles.overlayTitleMobile : styles.overlayIcon}/>
          </View>
          

        <Pressable onPress={() => navigation.navigate('LoggedArea')}>
          <MaterialIcons name="exit-to-app" marginBottom={20} marginLeft={20}size={35} color="#FFFFFF" />
        </Pressable>
      </View>

      <View style={styles.cadastroRight}>
        <ModalCadastro
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          carregarUsuarios={carregarUsuarios}
        >

        </ModalCadastro>


        <FlatList 
          contentContainerStyle={styles.flatListRenderItem}
          data={usuarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <Button onPress={() => setModalVisible(true)} marginBottom={20}>
          <Text style={styles.title}>Adicionar Usuário</Text>
        </Button>
      </View>
    </View>
  );
}
