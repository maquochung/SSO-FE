import {configureStore} from '@reduxjs/toolkit';
import reducer from '../Reducers/Reducer';

const store=configureStore({
    reducer
});
export default store;