import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
    return (
        <div id="app">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
