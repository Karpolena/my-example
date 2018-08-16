import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";


import Folder from "../../components/Folder";
import Template from "../../components/Template";
import * as FolderAction from "../../actions/Folders"; 


const Content = ({foldersStore, dispatch}) => {   
    <Switch>
        <Route exact path="/" component={Content}/>
        <Route path="/folder/:id" component={Folder}/>                                   
    </Switch>
    return(
        <content className="content"> 
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