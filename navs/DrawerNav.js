import { createDrawerNavigator } from '@react-navigation/drawer';
import { Chat } from '../screens/main/Chat';
import TabNav from './TabNav';
import { CameraView } from '../screens/main/CameraView';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    
    <Drawer.Navigator  >
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Profil" component={TabNav} />
      <Drawer.Screen  name="Camera" component={CameraView} />
    </Drawer.Navigator>
  );
}