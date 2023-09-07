import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text } from 'react-native';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';

export const CameraView = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(FlashMode.on); 
  const [camera, setCamera] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const CameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraPermissions.status == 'granted')
      const MediaPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(MediaPermissions.status == 'granted')
    })();
  }, []);


  const onCameraReady = () => {
    // kamera redo
  };

 
  const takePicture = async () => { // tar bild och navigerar till imagePreview
    if (camera) {
      try {
        const { uri } = await camera.takePictureAsync();
        navigation.navigate("ImagePreview", { picture: { uri } });
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  };


  const toggleCameraType = () => {    // byter mellan front cam och back cam
    setType(currentType =>
      currentType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const toggleFlash = () => {   // stänger av och på blixten
    setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  };

  useFocusEffect(
    React.useCallback(() => {
     
      return () => {
        
      };
    }, [])
  );


  if (isFocused == true ) {
    {
      return (
    <SafeAreaView style={styles.container}>
      {hasCameraPermission === null ? (
        <Text>Requesting camera permission...</Text>
      ) : hasCameraPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <View style={{ flex: 1 }}>
          <Camera
            style={styles.cameraContainer}
            type={type}
            flashMode={flash}  
            onCameraReady={onCameraReady}
            ref={ref => setCamera(ref)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
              <FontAwesome name="camera" size={40} color="white" />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.generalButton}>
              <Entypo name="flash" size={24} color={flash === FlashMode.on ? "yellow" : "white"} onPress={() => toggleFlash()}/>
            </TouchableOpacity>
              <TouchableOpacity onPress={toggleCameraType}>
                <FontAwesome
                  name={type === Camera.Constants.Type.back ? 'camera' : 'camera-retro'}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
    }
  } else {
    return (<View><Text>Permissions denied....</Text></View>);
  }
   
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    padding: 15,
    marginHorizontal: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});
