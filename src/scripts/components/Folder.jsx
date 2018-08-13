import React from "react";
import PropTypes from "prop-types";


const Folder = ({folder}) => {
    return(
        <div className="folder">
            <div className="folder-header">
                {folder.title}
            </div>
            
            <div className="folder-controls">
                folder
            </div>
            <button className="del">DELETE</button>  
            {/* <button className="del" onDelete={?..handleDelete..?}>DELETE</button>     Где описать ..handleDelete..?*/           }
            
            
        </div>
    )
}

export default Folder;

Folder.propTypes = {
    folder: PropTypes.object,
    className: PropTypes.string 
}