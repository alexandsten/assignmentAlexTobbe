import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../screens/main/Profile';
import { View, Text } from 'react-native';
import DrawerNav from './DrawerNav';
import { CameraView } from '../screens/main/CameraView';
import { ImagePreview } from '../screens/main/ImagePreview';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <View style={{flex:1}}>
        <Text>Main nav</Text>
          <Stack.Navigator>
          <Stack.Screen name="Drawer" component={DrawerNav} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="CameraView" component={CameraView} />
          <Stack.Screen name="ImagePreview" component={ImagePreview} />
        </Stack.Navigator>
    </View>
  );
}