import React from "react";
import Folder from "../../components/Folder";
import Template from "../../components/Template";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as FolderAction from "../../actions/Folders"; 


const Content = ({foldersStore, dispatch}) => {
    // handleDelete(id) 
    // {
    //     foldersStore.folders.filter(_folder => {              Где и как это писать??
    //         _folder.id !== id
    //         return {foldersStore }
    //     })
    // }
    return(
        <content className="content"> 
        {
            foldersStore.folders.map(_folder => {
                return (
                    <Folder key={_folder.id} folder={_folder} />
                )
            })
        }
        {
            foldersStore.isOpenTemplate ?
            <Template  onSave={(title) => {
                dispatch(FolderAction.saveFolder({
                    title,
                    id: Math.random().toString(36).substr(2, 9)
                }))
            }}/> : null
        }
             
           
        </content>
    )
}

export default connect(store => {
    return {
        foldersStore: store.foldersStore
    }
})(Content);
Content.propTypes = {
    foldersStore: PropTypes.object,
    dispatch: PropTypes.func
    }