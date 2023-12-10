import { combineReducers } from 'redux';
import Auth from './Auth';
import plannerData from './PlannerData';
import Theme from './Theme';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    plannerData: plannerData
});

export default reducers;