import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import {TheContextProvider} from "./theContext"

ReactDOM.render(
    <TheContextProvider>
        <Router>
            <App />
        </Router>
    </TheContextProvider>,
    document.getElementById("root")
)