import { combineReducers } from "redux";
import { studentData } from "./Student/studentReducer";

const appReducer = combineReducers({
    studentData : studentData
})

const rootreducer = (state,action) => {
    return appReducer(state,action);
}

export default rootreducer   