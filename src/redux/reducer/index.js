import { combineReducers } from "redux";
import loginReducer from "./auth/login.reducer";

const appReducer = combineReducers({
    session: loginReducer
});

export default appReducer;