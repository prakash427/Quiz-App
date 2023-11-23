
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Linking, Image, ImageBackground } from 'react-native';
import Styles from './styles';
import UserNameInput from './usenameinput';
import { useNavigation } from '@react-navigation/native'; 

const InstructionPage = ({ route }) => {
    const { username } = route.params; 
  const [isAdvertisementVisible, setAdvertisementVisible] = useState(false);
  const navigation = useNavigation();

  const showAdvertisement = () => {
    setAdvertisementVisible(true);
  };

  const closeAdvertisement = () => {
    setAdvertisementVisible(false);
  };

  const handleDownload = () => {
    const appStoreLink = 'https://play.google.com/store/apps/details?id=com.rapido.rider&hl=en&gl=US';
    Linking.openURL(appStoreLink);
  };

  const startQuiz = () => {
    navigation.navigate('QuizForm',{username}); 
  };

  useEffect(() => {
    showAdvertisement();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fafad2' }}>
          <Text style={Styles.Welcome}>Welcome {username}</Text>
      <Text style={Styles.iheading}>Please Read the Instructions</Text>

    <View style={Styles.Level}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>question : (1 to 3)</Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>You have to one option.</Text>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>question : (4 to 6)</Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>You have to multiple options.</Text>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>question : (7 to 9)</Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>You have to type your answer.</Text>
    </View>
      <TouchableOpacity onPress= {startQuiz} style={Styles.startquiz}>
        <Text style={Styles.startquizText}>Start Quiz</Text>
      </TouchableOpacity>

      {/* Advertisement Modal */}
      <Modal transparent={true} visible={isAdvertisementVisible} animationType="slide">
        <View style={Styles.modalContainer}>
          <View style={Styles.advertisementContainer}>
          <Image
              source={require('../src/assets/Rapido_image.png')} 
              style={Styles.advertisementImage}
            />
            <TouchableOpacity onPress={handleDownload} style={Styles.downloadButton}>
              <Text style={Styles.downloadButtonText}>Download Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeAdvertisement} style={Styles.closeButton}>
              <Text style={Styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InstructionPage;
