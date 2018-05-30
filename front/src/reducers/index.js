import { combineReducers } from 'redux';

import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './active-user';

// combine all reducers 
const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer
})

export default allReducers;