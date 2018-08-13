
import { combineReducers } from  "redux";
import FoldersReducer from "./Folders";

const reducers = combineReducers({
    foldersStore: FoldersReducer
});
export default reducers;
