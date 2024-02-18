import "./index.css";
import waldoImg from "./assets/egor-klyuchnyk-x-2-seasons-bt.jpg";
import { useRef } from "react";
import Marker from "./Marker";
import Dropdown from "./Dropdown";

function Content() {
    const imgRef = useRef(null);
    const markerRef = useRef(null);
    const dropdownRef = useRef(null);
    const wrapperRef = useRef(null);

    function handleClick(e) {
        let X = (e.clientX / window.innerWidth).toFixed(2);
        let Y = (e.nativeEvent.offsetY / imgRef.current.offsetHeight).toFixed(
            2
        );
        /*alert(
            "X: " +
                X +
                "\nY: +Y
        );*/

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
                <Dropdown ref={dropdownRef} />
            </div>
        </div>
    );
}

export default Content;
