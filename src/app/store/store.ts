import {compose, createStore, GenericStoreEnhancer} from 'redux';
import {IAppState} from './IAppState';
import {reducer} from './reducers';

declare var window: any;
const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(reducer, compose(devToolsExtension) as GenericStoreEnhancer);


