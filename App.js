import Login from "./app/login";
import LoggedArea from "./app/logged-area";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";
import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from './hooks/useLoadFonts';
import AppLoading from 'expo-app-loading';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const { fontsLoaded } = useLoadFonts();

  if(!fontsLoaded)
    return <AppLoading />;

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoggedArea" component={LoggedArea} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
