import React from "react";
import "./Content.css";

import {Routes, Route} from "react-router-dom";

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";

const Content = props =>
(
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>

    </main>
)


export default Content;