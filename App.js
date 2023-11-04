import Login from "./app/login";
import LoggedArea from "./app/logged-area";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoggedArea" component={LoggedArea} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
