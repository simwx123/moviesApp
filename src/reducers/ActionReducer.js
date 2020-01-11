  
import { Act } from '../actions/types';

const INITIAL_STATE = {
  allMovies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Act.ALL_MOVIE:
      return { ...state, allMovies: action.payload };
    default:
      return { ...state };
  }
};