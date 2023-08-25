import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/start/Login';
import { Register } from '../screens/start/Register';
import { Home } from '../screens/main/Home';
import { Settings } from '../screens/main/Settings';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}