import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/start/Login';
import { Register } from '../screens/start/Register';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function LoginNav() {
  return (
    <View style={{flex:1, backgroundColor:'blue', width:600}}>
        <Text>Login nav</Text>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </View>
  );
}