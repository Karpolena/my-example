
import { FOLDERS } from "../constants/Folders";

export const openTemplate = () => {
    return {
        type: FOLDERS.OPEN_TEMPLATE
    }
}
export const saveFolder = (payload) => {
    return {
        type: FOLDERS.SAVE_FOLDER,
        payload
    }
}
export const removeFolder = (id) => {
    return {
        type: FOLDERS.REMOVE_FOLDER,
        payload: {id}
    }
}