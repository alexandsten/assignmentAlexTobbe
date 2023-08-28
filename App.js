import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';

import 'react-native-gesture-handler';
import { RootNav } from './navs/RootNav';
import { StartProvider } from './contexts/StartContext';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';




export default function App() {



  return (
    <View style={styles.container} >
    <NavigationContainer>
      
    
      <StartProvider>
          <RootNav />
      </StartProvider>  
   
    
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
