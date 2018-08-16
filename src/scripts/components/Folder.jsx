import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

 
const Folder = ({folder, onDelete}) => {
   
    return(
        <div className="folder">
            <div className="folder-header">
                <Link to={`/folder/${folder.id}`}>{folder.title}</Link>
            </div>
            
            <div className="folder-controls">
                folder
            </div>
            <button className="del" onClick={() => onDelete(folder.id)}>DELETE</button>             
            
        </div>
    )
}

export default Folder;

Folder.propTypes = {
    folder: PropTypes.object,
    className: PropTypes.string,
    onDelete: PropTypes.func 
}