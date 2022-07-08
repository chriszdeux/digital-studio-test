import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'
import taskReducer from '../components/slices/todoSlice'

const persistConfig = {
  key: 'root',
  storage,
}
const reducers = combineReducers({ 
  todos: taskReducer,
  // login_reducer: loginReducer,
  // filter_reducer: filterReducer 
})

// export const store = configureStore({
//   reducer: {
//     todos: taskReducer,
//   }
// })
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})


export const persistor = persistStore(store)