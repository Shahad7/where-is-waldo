import "./index.css";
import canti from "/images/canti.avif";
import spike from "/images/spike.webp";
import billy from "/images/billy.webp";
import neo from "/images/neo.jpg";
import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";
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
        <Option
            key={images.indexOf(elt)}
            checkCoordinates={props.checkCoordinates}
            id="option"
            img={elt.src}
            name={elt.name}
            isHeader={false}
        />
    ));
    return (
        <div id="dropdown-container" ref={ref}>
            <Icon
                className="close-btn"
                path={mdiCloseThick}
                size={1}
                onClick={props.closeDropdown}
            />
            <div id="dropdown">{options}</div>
        </div>
    );
});

export default Dropdown;
