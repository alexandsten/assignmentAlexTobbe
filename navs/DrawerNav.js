import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from '../screens/main/Profile';
import { Chat } from '../screens/main/Chat';
import TabNav from './TabNav';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    
    <Drawer.Navigator>
      
      <Drawer.Screen name="Chat" component={Chat} />
           <Drawer.Screen name="Profil" component={TabNav} />
      
    </Drawer.Navigator>
  );
}