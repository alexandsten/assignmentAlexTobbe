import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Camera, CameraType, FlashMode } from 'expo-camera';

export const CameraView = ({navigation}) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  
    const [camera, setCamera] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status === 'granted');
      })();
    }, []);
  
    const onCameraReady = () => {
      // Camera is ready, you can now take pictures
    };
  
    const takePicture = async () => {
      if (camera) {
        try {
          const picture = await camera.takePictureAsync();
          navigation.navigate("ImagePreview", { picture });
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    const toggleCameraType = () => {
      setType(currentType =>
        currentType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    };
  
    const toggleFlash = () => {
      setFlash(currentFlash =>
        currentFlash === Camera.Constants.FlashMode.off
          ? Camera.Constants.FlashMode.on
          : Camera.Constants.FlashMode.off
      );
    };
  
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
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    cameraContainer: {
      flex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
    cameraButton: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });