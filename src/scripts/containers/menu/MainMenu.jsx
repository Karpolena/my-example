import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as FolderActions from "../../actions/Folders";

const MainMenu = ({dispatch}) => {
    return(
        <menu className="main-menu">
            <button onClick={() => {
                dispatch(FolderActions.openTemplate());
                }}>Create</button>
        </menu>
    )
}
 
const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps)(MainMenu);

MainMenu.propTypes = {
    dispatch: PropTypes.func
}