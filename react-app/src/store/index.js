import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session"
import games from "./game"
import skillsReducer from "./skills";
import teamReducer from "./team"; //CHECK SYNTAX
import gameJamReducer from "./game_jam";
import userReducer from "./user"

const rootReducer = combineReducers({
    session,
    skillsReducer,
    games,
    teams,
    gameJams: gameJamReducer,
    userReducer,
    teams: teamReducer,
    gameJams: gameJamReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
