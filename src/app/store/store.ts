import {createStore} from 'redux';
import {IAppState} from './IAppState';
import {reducer} from './reducers';

export const store = createStore<IAppState>(reducer);


