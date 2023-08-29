import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/start/Login';
import { Register } from '../screens/start/Register';
import { Chat } from '../screens/main/Chat';
import { Settings } from '../screens/main/Settings';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <View style={{flex:1, backgroundColor:'pink'}}>
        <Text>Main nav</Text>
        <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </View>
  );
}