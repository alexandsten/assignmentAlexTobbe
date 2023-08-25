import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';

import 'react-native-gesture-handler';
import { RootNav } from './navs/RootNav';
import { StartProvider } from './contexts/StartContext';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();


export default function App() {



  return (
    <NavigationContainer>
      
       <SafeAreaView style={styles.container} >
    
      <StartProvider>
          <RootNav />
      </StartProvider>  
   
    </SafeAreaView>
    </NavigationContainer>
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
