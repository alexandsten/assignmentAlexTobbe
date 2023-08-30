import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/start/Login';
import { Register } from '../screens/start/Register';
import { Chat } from '../screens/main/Chat';
import { Profile } from '../screens/main/Profile';
import { View, Text } from 'react-native';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <View style={{flex:1}}>
        <Text>Main nav</Text>
        <Stack.Navigator>
          
        <Stack.Screen name="Drawer" component={DrawerNav} />
        <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </View>
  );
}