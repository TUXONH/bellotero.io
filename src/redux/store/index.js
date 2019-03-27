
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)));