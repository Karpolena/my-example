
 import { FOLDERS } from "../constants/Folders";

 let initialState = {     
     folders: [],
     id: [],           
     isOpenTemplate: false
 }


 const openTemplate = (state) => {
     return {...state, isOpenTemplate: true}
 }

 const saveFolder = (state, payload) => {
     state.folders.push(payload);
     return { ...state, isOpenTemplate: false }
 }
 const removeFolder = (state, payload) => {
	state.folders = state.folders.filter(itm => itm.id !== payload.id); 
	return{...state}
}


 const FoldersReducer = (state = initialState, action) => {
     switch (action.type) {
         case FOLDERS.OPEN_TEMPLATE:
            return openTemplate(state);
        case FOLDERS.SAVE_FOLDER:
            return saveFolder(state, action.payload);
            case FOLDERS.REMOVE_FOLDER:
            return removeFolder(state, action.payload);
        default: return state;
     }
 }
 export default FoldersReducer;