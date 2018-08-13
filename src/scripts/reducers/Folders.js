
 import { FOLDERS } from "../constants/Folders";

 let initialState = {     
     folders: [],
     id: [],           //     как добавить id
     isOpenTemplate: false
 }


 const openTemplate = (state) => {
     return {...state, isOpenTemplate: true}
 }

 const saveFolder = (state, payload) => {
     state.folders.push(payload);
     return { ...state, isOpenTemplate: false }
 }
 const removeFolder = (state) => {
	// state.folders.filter(folder => id !== id);         как это записать?
	return{...state}
}


 const FoldersReducer = (state = initialState, action) => {
     switch (action.type) {
         case FOLDERS.OPEN_TEMPLATE:
            return openTemplate(state);
        case FOLDERS.SAVE_FOLDER:
            return saveFolder(state, action.payload);
            case FOLDERS.REMOVE_FOLDER:
            return removeFolder(state);
        default: return state;
     }
 }
 export default FoldersReducer;