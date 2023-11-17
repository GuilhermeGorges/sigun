import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from '../styles/styles.js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

import { fetchUserFunctions } from '../services/api';

export default function LoggedArea({ navigation }) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [userFunctions, setUserFunctions] = useState([]);

  useEffect(() => {
    const loadUserFunctions = async () => {
      try {
        setLoading(true);
        const userFunctionsData = await fetchUserFunctions(user.profileType, page);
        setUserFunctions((prevFunctions) => [...prevFunctions, ...userFunctionsData]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error loading user functions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFunctions();
  }, [user.profileType, page]);


  const handleFunctionClick = (functionName) => {
    console.log(`Clicou na função: ${functionName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFunctionClick(item.functionName)}>
      <View style={styles.functionContainer}>
        <MaterialIcons style={styles.functionIcon} size={100} name={item.icon} />
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
          numColumns={2}
          columnWrapperStyle={styles.flatListColumnWrapper}
          onEndReached={() => !loading && setPage((prevPage) => prevPage + 1)}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}