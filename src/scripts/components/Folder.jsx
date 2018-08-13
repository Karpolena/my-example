import React from "react";
import PropTypes from "prop-types";

 
const Folder = ({folder, onDelete}) => {
   
    return(
        <div className="folder">
            <div className="folder-header">
                {folder.title}
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