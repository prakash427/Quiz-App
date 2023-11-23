import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect, useDispatch } from 'react-redux';
import { selectOption, submitQuiz, calculateScore, resetQuizAction, updateDescriptiveAnswer } from './action';
import Styles from './styles';
import ScorePopup from './scorepopup';


const YourComponent = ({ questions, submitQuiz, calculateScore, submitted, score, selectOption, resetQuizAction, route, updateDescriptiveAnswer }) => {
  const { username } = route.params;
  const [isScoreVisible, setIsScoreVisible] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false); 
  const [descriptiveAnswers, setDescriptiveAnswers] = useState({});


  const dispatch = useDispatch();

  const resetQuiz = () => {
    dispatch(resetQuizAction());
    setAnswerVisible(false); 
    setDescriptiveAnswers({}); 
    setIsScoreVisible(false);
    setAnswerVisible(true); 
  };

  const handleSubmit = () => {
    setIsScoreVisible(true);
  };

  const handleOk = () => {
    resetQuiz();
    setIsScoreVisible(false);
  };

  const handleDescriptiveChange = (questionIndex, value) => {
    console.log('Handling change for question index:', questionIndex);
    console.log('New value:', value);
    setDescriptiveAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
    dispatch(updateDescriptiveAnswer(questionIndex, value));
  console.log('New Value:', value);
  
  };

  useEffect(() => {
    if (isScoreVisible) {
      dispatch(submitQuiz()); 
      dispatch(calculateScore());
  
    }
  }, [isScoreVisible]);


  const closeScorePopup = () => {
    setIsScoreVisible(false);
    setAnswerVisible(true); 
  };

  const renderFixedHeader = () => (
    <View style={Styles.container}>
      <Text style={Styles.title}>{username} your quiz start now</Text>
      <Text style={Styles.Instruction}>Select Your Answers</Text> 
    </View>
  );

  const renderQuestion = ({ item: question, index: questionIndex }) => (
  <View key={question.id}>
  <Text style={Styles.question}>{`${question.id}: ${question.text}`}</Text>
  {question.input && question.input.label ? (
    <TextInput
      style={Styles.descriptiveInput}
      placeholder={question.input.label}
      value={descriptiveAnswers[questionIndex]||''}
      onChangeText={(value) => handleDescriptiveChange(questionIndex, value)}
      editable={!submitted}
    />
  ) : (
    question.options.map((option, optionIndex) => (
      <View style={Styles.optionContainer} key={optionIndex}>
        <TouchableOpacity
          key={optionIndex}
          onPress={() => selectOption(questionIndex, optionIndex)}
          disabled={submitted}
        >
          <View style={Styles.optionContainer}>
            {option.selected ? <Icon name='circle' size={15} color='#9acd32' /> : <Icon name='circle-thin' size={15} color='black' />}
            <Text style={Styles.options}>{option.label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ))
  )}
</View>
 );

  return (
    <View style={Styles.screen}>
    <FlatList
      data={questions}
      renderItem={renderQuestion}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderFixedHeader}
      ListFooterComponent={() => (
        <View>
          {submitted?(
            <TouchableOpacity onPress={resetQuiz} style={Styles.submitButton}>
              <Text style={Styles.submitButtonText}>Reset</Text>
            </TouchableOpacity>
          ):( <TouchableOpacity onPress={handleSubmit} style={Styles.submitButton}>
            <Text style={Styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>)}
           <ScorePopup isVisible={isScoreVisible} score={score} onClose={resetQuiz} onOk={resetQuiz}/>
        </View>
      )}
    />
    </View>
  );
};

const mapStateToProps = (state) => ({
  questions: state.quiz.questions,
  submitted: state.quiz.submitted,
  score: state.quiz.score,
});

const mapDispatchToProps = {
  submitQuiz,
  calculateScore,
  selectOption,
  resetQuizAction,
  updateDescriptiveAnswer,
};


export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);