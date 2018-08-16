import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Folder from "./pages/Folder";
import NotFound from "./pages/HotFound";

const Content = () => {   
    return(
        <content className="content"> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/folder/:id" component={Folder}/>   
                <Route path="*" component={NotFound}/>                                  
            </Switch>
        </content>
    )
}
export default Content;
