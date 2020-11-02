import { types } from '../../actions/types';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return [...state, ...action.payload];
  
    default:
      return state;
  }
};

export default postsReducer;