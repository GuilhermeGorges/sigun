import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles.js';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoggedArea({navigation}) {
    const { user } = useContext(AuthContext)
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>{user.name}</Text>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <MaterialIcons name="exit-to-app" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="LoggedArea" />
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    );
} 