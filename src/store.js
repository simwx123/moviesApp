import { createStore } from 'redux';
// import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
export default createStore(reducers);