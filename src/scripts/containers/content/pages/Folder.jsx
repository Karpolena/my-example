import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Folder = ({match, folders}) => {
    let folder = folders.find((itm => itm.id === match.params.id));
   
    return (
        <div className="folder-page"> 
            {
                folder ? <h1>Folder name: {folder.title}</h1> : <h1>Folder not fount</h1>
            }
        </div>
    )
}

Folder.propTypes = {
    match: PropTypes.object,
    folders: PropTypes.array
}

export default connect(store => {
    return {
        folders: store.foldersStore.folders
    }
})(Folder);