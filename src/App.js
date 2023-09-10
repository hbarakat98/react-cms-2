import React from 'react';
import "../src/asset/css/custom.css";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";




function App() {
    return (

            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>



    );
}

export default App;
