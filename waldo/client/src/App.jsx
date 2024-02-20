import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useRef } from "react";

function App() {
    //header-options refs
    const cantiRef = useRef(null);
    const spikeRef = useRef(null);
    const billyRef = useRef(null);
    const neoRef = useRef(null);
    return (
        <div id="app">
            <Header
                refs={{
                    canti: cantiRef,
                    spike: spikeRef,
                    billy: billyRef,
                    neo: neoRef,
                }}
            />
            <Content
                refs={{
                    canti: cantiRef,
                    spike: spikeRef,
                    billy: billyRef,
                    neo: neoRef,
                }}
            />
            <Footer />
        </div>
    );
}

export default App;
