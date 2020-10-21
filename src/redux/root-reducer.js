import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoListReducer from './todoList/todoList.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['todo']
};

const rootReducer = combineReducers({
    todoList: todoListReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
