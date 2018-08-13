import React, { Component } from "react";
import PropTypes from "prop-types";
 
class Template extends Component {
    state = {
        title: ""
    }
    onChange = (event) => {
        this.setState({title: event.target.value});
    }
    onSave = () => {
        this.props.onSave(this.state.title);
    }
    render() {
        return(
            <div className="folder">
                <div className="folder-header">
                    <input  value={this.state.title} type="text" onChange={this.onChange}/>
                </div>
    
                <div className="folder-controls">
                    <button onClick={this.onSave}>Save</button>
                </div>
            </div>
        )
    }
    
}

export default Template;
Template.propTypes = {
    onSave: PropTypes.func
}