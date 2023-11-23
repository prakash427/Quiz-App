
const initialState = {
  questions: [
    {
      id: 1,
      text: 'What is the capital of INDIA?',
      options: [
        { label: 'New Delhi', id: 0, selected: false },
        { label: 'Madhya Pradesh', id: 1, selected: false },
        { label: 'Karnataka', id: 2, selected: false },
        { label: 'Telangana', id: 3, selected: false },
      ],
      correctAnswer: 'New Delhi',
    },
    {
      id: 2,
      text: 'Who is the Prime Minister of INDIA?',
      options: [
        { label: 'Rohit Sharma', id: 0, selected: false },
        { label: 'Narendra Modi', id: 1, selected: false },
        { label: 'Amitsha', id: 2, selected: false },
        { label: 'Pawan Kalyan', id: 3, selected: false },
      ],
      correctAnswer: 'Narendra Modi',
    },
    {
      id: 3,
      text: 'What is the capital of France?',
      options: [
        { label: 'Paris', id: 0, selected: false },
        { label: 'Berlin', id: 1, selected: false },
        { label: 'Madrid', id: 2, selected: false },
        { label: 'Rome', id: 3, selected: false },
      ],
      correctAnswer: 'Paris',
    },
    {
      id: 4,
      text: 'Which of the following are mammals?',
      options: [
        { label: 'Dog', id: 0, selected: false },
        { label: 'Fish', id: 1, selected: false },
        { label: 'Bird', id: 2, selected: false },
        { label: 'Cat', id: 3, selected: false },
      ],
      correctAnswers: ['Dog', 'Cat'],
    },
    {
      id: 5,
      text: 'What are the primary colors?',
      options: [
        { label: 'Red, Green, Blue', id: 0, selected: false },
        { label: 'Yellow, Purple, Orange', id: 1, selected: false },
        { label: 'Black, White, Grey', id: 2, selected: false },
        { label: 'Pink, Brown, Cyan', id: 3, selected: false },
      ],
      correctAnswers: ['Red, Green, Blue'],
    },
    {
      id: 6,
      text: 'Which countries are in the G7?',
      options: [
        { label: 'USA, China, India', id: 0, selected: false },
        { label: 'Germany, Japan, Italy', id: 1, selected: false },
        { label: 'Brazil, Russia, Mexico', id: 2, selected: false },
        { label: 'Canada, France, UK', id: 3, selected: false },
      ],
      correctAnswers: ['Germany, Japan, Italy', 'Canada, France, UK'],
    },
    {
      id: 7,
      text: 'What is the largest planet in our solar system?',
      input: { label: 'Your Answer:', id: 0, value: '', submitted: false },
      correctAnswer: 'Jupiter',
    },
    
    {
      id: 8,
      text: 'Which gas do plants absorb during photosynthesis?',
      input: { label: 'Your Answer:', id: 0, value: '', submitted: false },
      correctAnswer: 'Carbon Dioxide',
    },
    
    {
      id: 9,
      text: 'Who wrote "Romeo and Juliet"?',
      input: { label: 'Your Answer:', id: 0, value: '', submitted: false },
      correctAnswer: 'William Shakespeare',
    },
    
    
  ],
  submitted: false,
  score: 0,
};


const quizReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_USERNAME' :
      return{
        ...state,
        username : action.payload,
      };
      case 'SELECT_OPTION':
        const { questionIndex: selectOptionIndex, optionIndex } = action.payload;
        const selectOptionUpdatedQuestions = [...state.questions];
  
        selectOptionUpdatedQuestions[selectOptionIndex].options[optionIndex].selected = !selectOptionUpdatedQuestions[selectOptionIndex].options[optionIndex].selected;
  
        return {
          ...state,
          questions: selectOptionUpdatedQuestions,
        };
        case 'UPDATE_DESCRIPTIVE_ANSWER':
  const { questionIndex, value } = action.payload;
  console.log('Received payload:', action.payload);
  const updatedQuestions = [...state.questions];
  
  if (updatedQuestions[questionIndex] && updatedQuestions[questionIndex].input) {
    updatedQuestions[questionIndex].input.value = value;
  }

  return {
    ...state,
    questions: updatedQuestions,
};
    case 'SUBMIT_QUIZ':
      return {
        ...state,
        submitted: true,
      };  
case 'CALCULATE_SCORE':
  const score = state.questions.reduce((acc, question) => {
    if (question.input) {
      const submittedValue = question.input.value;
      const correctAnswer = question.correctAnswer;
      console.log('Question:', question.text);
      console.log('Submitted Value:', submittedValue);
      console.log('Correct Answer:', correctAnswer);
          if (submittedValue.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {

        console.log('Correct!');
        return acc + 1;
      } else {
        console.log('Incorrect!');;
      }
    } else {
      const selectedOptions = question.options.filter((option) => option.selected);
      const correctAnswers = question.correctAnswers || [question.correctAnswer];

      const isCorrect = correctAnswers.every((correctAnswer) =>
        selectedOptions.some((selectedOption) => selectedOption.label === correctAnswer)
      );

      if (isCorrect) {
        return acc + 1;
      }
    }

    return acc;
  }, 0);
  console.log('Score:', score);

  return {
    ...state,
    score,
  };

    case 'RESET_QUIZ':
      console.log('Quiz has been reset');
      const resetQuestions = state.questions.map((question) => {
        if (question.input) {
          return {
            ...question,
            input: {
              ...question.input,
              value: '',
              submitted: false,
            },
          };
        } else {
          return {
            ...question,
            options: question.options.map((option) => ({
              ...option,
              selected: false,
            })),
          };
        }
      });
      return {
        ...state,
        submitted: false,
        score: 0,
        questions: resetQuestions,
      };

    default:
      return state;
  }
};

export default quizReducer;
