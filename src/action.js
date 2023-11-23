
import { SUBMIT_QUIZ, CALCULATE_SCORE, RESET_QUIZ, SET_USERNAME, UPDATE_DESCRIPTIVE_ANSWER } from './actionTypes';

export const submitQuiz = (answers, value) => ({
  type: SUBMIT_QUIZ,
  payload: {answers, value},
});

export const calculateScore = () => ({
  type: CALCULATE_SCORE,
});

export const selectOption = (questionIndex, optionIndex) => ({
  type: 'SELECT_OPTION',
  payload: { questionIndex, optionIndex },
});

export const resetQuizAction = () => ({
  type: RESET_QUIZ,
});

export const setUser = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const updateDescriptiveAnswer = (questionIndex, value) => ({
  type: 'UPDATE_DESCRIPTIVE_ANSWER',
  payload: { questionIndex, value },
});