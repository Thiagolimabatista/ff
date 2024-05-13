import { combineReducers } from 'redux';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// slices

import clientReducer from './slices/client';
import siteReducer from './slices/site';



// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({

  client: clientReducer,
  site: siteReducer,

});

export default rootReducer;
