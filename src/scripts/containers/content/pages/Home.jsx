import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Folder from "../../../components/Folder";
import Template from "../../../components/Template";
import * as FolderAction from "../../../actions/Folders";

const Home = ({foldersStore, dispatch}) => {
    return (
        <div className="home"> 
        {
            foldersStore.folders.map(_folder => {
                return (
                    <Folder 
                    key={_folder.id} 
                    folder={_folder} 
                    onDelete={(id) => dispatch(FolderAction.removeFolder(id))}
                    />
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
        
         
        </div>
    )
}

Home.propTypes = {
    foldersStore: PropTypes.object,
    dispatch: PropTypes.func
}

export default connect(store => {
    return {
        foldersStore: store.foldersStore
    }
})(Home);