import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoListReducer from './todoList/todoList.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['todo']
};

const rootReducer = combineReducers({
    todo: todoListReducer
});

export default persistReducer(persistConfig, rootReducer);
