import { configureStore } from '@reduxjs/toolkit';
import rootreducer from '../Reducers/rootreducer';

const store = configureStore({
  reducer: rootreducer
});



export default store;