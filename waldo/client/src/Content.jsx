import "./index.css";
import waldoImg from "./assets/egor-klyuchnyk-x-2-seasons-bt.jpg";
import { useRef } from "react";
import Marker from "./Marker";
import Dropdown from "./Dropdown";

function Content({ refs }) {
    const imgRef = useRef(null);
    const markerRef = useRef(null);
    const dropdownRef = useRef(null);
    const wrapperRef = useRef(null);

    //coordinates
    let X, Y;

    const coordinates = {
        canti: { x: 0.43, y: 0.97 },
        spike: { x: 0.6, y: 0.71 },
        billy: { x: 0.58, y: 0.86 },
        neo: { x: 0.39, y: 0.49 },
    };

    function checkCoordinates(e) {
        let option = e.target.dataset.key;
        console.log(option);
        let { x, y } = coordinates[option];
        if (Math.abs(x - X) < 0.02 && Math.abs(y - Y) < 0.02) {
            refs[option].current.style.backgroundColor = "#74c374";
            console.log(refs[option].current.style);
            closeDropdown();
            alert("match");
        } else {
            closeDropdown();
            alert("wrong");
        }
    }

    function closeDropdown() {
        wrapperRef.current.style.display = "none";
    }

    function handleClick(e) {
        X = (e.clientX / window.innerWidth).toFixed(2);
        Y = (e.nativeEvent.offsetY / imgRef.current.offsetHeight).toFixed(2);
        //console.log("X: " + X + "\nY:" + Y);

        //reset
        dropdownRef.current.style.top = "0px";
        dropdownRef.current.style.left = "0px";
        wrapperRef.current.style.display = "flex";
        wrapperRef.current.style.top =
            e.pageY - markerRef.current.offsetHeight / 2 + "px";
        wrapperRef.current.style.left =
            e.pageX - markerRef.current.offsetHeight / 2 + "px";

        if (imgRef.current.offsetHeight - e.pageY < 100) {
            dropdownRef.current.style.top =
                "-" + dropdownRef.current.offsetHeight + "px";
        }
        if (imgRef.current.offsetWidth - e.pageX < 150) {
            dropdownRef.current.style.left =
                "-" + (dropdownRef.current.offsetWidth + 100) + "px";
        }
    }
    return (
        <div id="content">
            <img
                onClick={handleClick}
                src={waldoImg}
                id="waldo-img"
                alt="where's waldo game image"
                ref={imgRef}
            />
            <div ref={wrapperRef} id="marker-wrapper">
                <Marker ref={markerRef} />
                <Dropdown
                    ref={dropdownRef}
                    checkCoordinates={checkCoordinates}
                    closeDropdown={closeDropdown}
                />
            </div>
        </div>
    );
}

export default Content;
