import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


 
const FolderInner = ({folder}) => {
   
    return(
        <div className="folder">
            <div className="folder-header">
                <Link to="/">Content </Link>
                {/* <Link to={`/folder/${folder.id}`}>{folder.title}</Link> */}
            </div>
            
            <div className="folder-controls">
            {folder.title}
            </div>
                         
            
        </div>
    )
}

export default FolderInner;

Folder.propTypes = {
    folder: PropTypes.object,
    className: PropTypes.string
}