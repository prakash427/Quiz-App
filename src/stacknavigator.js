
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserNameInput from './usenameinput';
import QuizForm from './quizForm'; 
import InstructionPage from './instructions';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserNameInput">
          <Stack.Screen name="UserNameInput" component={UserNameInput} options={{ headerShown: false }}/>
          <Stack.Screen name="InstructionPage" component={InstructionPage} options={{ headerShown: false }}/>
          <Stack.Screen name="QuizForm" component={QuizForm} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
