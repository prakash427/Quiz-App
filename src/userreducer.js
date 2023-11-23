import { SET_USERNAME } from './actionTypes';

const initialusername = {
    username: '',
    // ... other initial state properties
  };
  
  const yourReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
      // ... other cases
      default:
        return state;
    }
  };
  
  export default initialusername;