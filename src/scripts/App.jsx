
import React, { Component } from "react";
import Header from "./containers/header/Header";
import MainMenu from "./containers/menu/MainMenu";
import Content from "./containers/content/Content";

class App extends Component {
    render() {
        return (
            <main className="main">
                <Header /> 
                <div className="wrap-content">
                    <MainMenu />
                    <Content />
                </div>
            </main>

        )
    }
}
export default App;