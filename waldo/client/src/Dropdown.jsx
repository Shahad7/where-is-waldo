import "./index.css";
import canti from "/images/canti.avif";
import spike from "/images/spike.webp";
import billy from "/images/billy.webp";
import neo from "/images/neo.jpg";
import Option from "./Option";
import { forwardRef } from "react";

const Dropdown = forwardRef((props, ref) => {
    const images = [
        { src: canti, name: "canti" },
        { src: spike, name: "spike" },
        { src: billy, name: "billy" },
        { src: neo, name: "neo" },
    ];
    const options = images.map((elt) => (
        <Option key={images.indexOf(elt)} img={elt.src} name={elt.name} />
    ));
    return (
        <div id="dropdown" ref={ref}>
            {options}
        </div>
    );
});

export default Dropdown;
