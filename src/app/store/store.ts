import {applyMiddleware, compose, createStore, GenericStoreEnhancer} from 'redux';
import {IAppState} from './IAppState';
import {reducer} from './reducers';
import freezeState from './freezeState';

// set up dev tools
declare var window: any;
const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(reducer,
  compose(applyMiddleware(freezeState),
    devToolsExtension) as GenericStoreEnhancer);


