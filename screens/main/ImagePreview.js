import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

import { StartContext } from '../../contexts/StartContext';

export const ImagePreview = ({route, navigation}) => {
  const { picture } = route.params;
  const { setPicture } = useContext(StartContext);

  const savePicture = async () => {
    try {
      // Create an asset out of the picture
      const asset = await MediaLibrary.createAssetAsync(picture.uri);

      // Retrieve an existing album or create one
      const album = await MediaLibrary.getAlbumAsync('Expo');

      if (album == null) {
        await MediaLibrary.createAlbumAsync('Expo', asset, false);
      } else {
        // Put the asset (picture) in the album
        await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
      }

      setPicture(null);
      navigation.navigate("CameraView"); // Navigate back to the CameraView component
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: picture.uri }} style={{ flex: 1 }} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.generalButton}>
          <Feather name="trash-2" size={30} color="white" onPress={() => setPicture(null)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.generalButton}>
          <Entypo name="check" size={30} color="white" onPress={() => savePicture()} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center'
    },
    cameraContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,
    },
    buttonsTopContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    buttonsBottomContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 20,
    },
  
    generalButton: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      width: 50,
      height: 50,
      marginRight: 5,
    },
    cameraButton: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 40,
      width: 80,
      height: 80,
    },
    text: {
      fontSize: 18,
      color: 'white',
      marginLeft: 20,
    }
  });
