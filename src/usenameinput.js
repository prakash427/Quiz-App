import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground,} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {setUser}  from './action';

const UserNameInput = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);

  const dispatch = useDispatch();

  const validation = () => {
    const trimmedUsername = String(username).trim(); 
    if (trimmedUsername === '') {
      setUsernameError(true);
    } else {
      setUsernameError(false);
      dispatch(setUser(trimmedUsername));
      navigation.navigate('InstructionPage', { username: trimmedUsername });
    }
  }

  return (
    <ImageBackground
      source={require('../src/assets/quiz_background_image.jpg')} 
      style={Styles.backgroundImage}
    >
      <View style={Styles.ucontainer}>
        <View style={Styles.card}>
          <Text style={Styles.utitle}>Enter Your Name</Text>
          <TextInput
            style={Styles.uinput}
            placeholder="Name"
            placeholderTextColor='black'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          {usernameError ? <View><Text style = {Styles.error}>Please Enter Your Name</Text></View> : null}
          <TouchableOpacity onPress={validation} style={Styles.startButton}>
            <Text style={Styles.startButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserNameInput;
