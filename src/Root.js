import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Route path="/" component={Home} />
        </div>
    );
};

export default Root;
