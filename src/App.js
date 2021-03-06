import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Routes from "./components/routes/Routes";
import "./styles/main.scss";
import StateProvider from "./components/contexts/StateProvider";

const initialState = {
    ui: {},
    cart: [],
    order: {},
    auth: {}
};

const App = () => {
    return (
        <BrowserRouter>
            <StateProvider initialState={initialState}>
                <Layout>
                    <Routes />
                </Layout>
            </StateProvider>
        </BrowserRouter>
    );
};

export default App;
