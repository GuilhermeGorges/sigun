import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoggedArea({ navigation }) {
    const { user } = useContext(AuthContext)
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
                    <TouchableOpacity >
                <Text></Text>
          </TouchableOpacity>
                {/* {userFunctions.map((functionName, index) => (
                    <TouchableOpacity key={index} onPress={() => handleFunctionClick(functionName)}>
                <Text>{functionName}</Text>
          </TouchableOpacity>
        ))} */}

            </View>
        </View>
    );
} 