import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/start/Login';
import { Register } from '../screens/start/Register';

const Stack = createNativeStackNavigator();

export default function LoginNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}