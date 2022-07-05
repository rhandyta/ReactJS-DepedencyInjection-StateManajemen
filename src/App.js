import React from 'react'
import "./App.css";
import Navbar from "./Navbar";
import { AppProvider } from "./context/app-context";
import Setting from "./Setting";

import DisplayTheme from "./DisplayTheme";
import ToggleTheme from "./ToggleTheme";
import Reducer from "./Reducer";

function App() {
    return (
        <div className="App">
            {/* <Reducer /> */}
            <AppProvider>
                <Navbar />
                <hr />
                <Setting />
                <hr />
                <DisplayTheme />
                <ToggleTheme />
            </AppProvider>
        </div>
    );
}

export default App;
