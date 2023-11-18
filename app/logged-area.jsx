import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from '../styles/styles.js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

import { fetchUserFunctions } from '../services/api';

export default function LoggedArea({ navigation }) {
  const { user } = useContext(AuthContext);
  const [userFunctions, setUserFunctions] = useState([]);

  useEffect(() =>  {
    const loadUserFunctions = async () => {
      try {
        const userFunctions = await fetchUserFunctions(user.profileType);
        setUserFunctions(userFunctions);
      } catch (error) {
      }
    };

    loadUserFunctions();
  }, [user.profileType]);


  const handleFunctionClick = (functionName) => {
    console.log(`Clicou na função: ${functionName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFunctionClick(item.functionName)}>
      <View style={styles.functionContainer}columnWrapperStyle={{justifyContent: 'space-between'}}>
        <MaterialIcons style={styles.functionIcon} size={150} name={item.icon} />
        <Text style={styles.functionName}>{item.functionName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <View style={styles.loggedContainerLeft}>
        <View style={styles.sidebar}>
          <View >
            <Text style={styles.welcome}>Bem vindo,</Text>
            <Text style={styles.title}>{user.name}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="exit-to-app" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View>

        </View>

        <Text></Text>

      </View>


      <View style={styles.loggedContainerRight}>
        <FlatList
          data={userFunctions}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.functionName}-${index}`}
          showsVerticalScrollIndicator={true}
          numColumns={2} 
          contentContainerStyle={styles.flatListContainer}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
    </View>
  </View>
  );
}