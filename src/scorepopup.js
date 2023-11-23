
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';
import  Share  from 'react-native-share';
import  {useSelector}  from 'react-redux';

const ScorePopup = ({ isVisible, score, onClose, }) => {

  const username = useSelector((state)=>state.quiz.username)

  const navigation = useNavigation();

  const onExit = () => {
    navigation.navigate('UserNameInput');
    onClose();
  };

  const share = async () => {
    const options = {
      message: `Hey, I'm ${username}! I scored ${score} points in the quiz. Can you beat my score?`,
    };

    try {
      const res = await Share.open(options)
      console.log(res);
    } catch (err) {
      console.log(err);
 }
  };
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => onClose()}
    >
      <View style={Styles.popupContainer}>
        <View style={Styles.popupContent}>
          <Text style={Styles.popupText}>{`Your Score: ${score}`}</Text>
          <View style={Styles.buttoncontainer}>
          <TouchableOpacity onPress={() => onClose()} style={Styles.popupButton}>
            <Text style={Styles.popupButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onExit} style={Styles.popupButton}>
            <Text style={Styles.popupButtonText}>Exit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={share} style={Styles.popupButton}>
            <Text style={Styles.popupButtonText}>Share</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ScorePopup;
