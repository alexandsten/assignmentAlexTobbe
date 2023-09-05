import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for camera icons
import { Camera } from 'expo-camera';
import { useFocusEffect } from '@react-navigation/native';

export const CameraView = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState('off'); // Updated to use flash modes as strings
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
      currentFlash === 'off'
        ? 'on'
        : 'off'
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      // Reinitialize the camera here
      return () => {
        // Clean up or release the camera when the component loses focus if needed
      };
    }, [])
  );

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
            flashMode={flash} // Use flash state here
            onCameraReady={onCameraReady}
            ref={ref => setCamera(ref)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
              <FontAwesome name="camera" size={40} color="white" />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={toggleFlash}>
                <FontAwesome
                  name={flash === 'off' ? 'flash' : 'flash'}
                  size={30}
                  color="white"
                />
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
