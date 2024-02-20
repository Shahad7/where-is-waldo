import "./index.css";
import canti from "/images/canti.avif";
import spike from "/images/spike.webp";
import billy from "/images/billy.webp";
import neo from "/images/neo.jpg";
import Option from "./Option";

function Header({ refs }) {
    const images = [
        { src: canti, name: "canti" },
        { src: spike, name: "spike" },
        { src: billy, name: "billy" },
        { src: neo, name: "neo" },
    ];
    const options = images.map((elt) => (
        <Option
            key={images.indexOf(elt)}
            checkCoordinates={null}
            img={elt.src}
            id="header-option"
            name={elt.name}
            refx={refs[elt.name]}
            isHeader={true}
        />
    ));
    return (
        <header id="header">
            <div id="header-option-wrapper">{options}</div>
        </header>
    );
}

export default Header;
