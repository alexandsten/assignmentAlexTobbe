import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons'; 
import { Profile } from '../screens/main/Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (

   
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile}/> 
    </Tab.Navigator> 
  );
}