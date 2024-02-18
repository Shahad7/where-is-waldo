import "./index.css";
import { forwardRef } from "react";
const Marker = forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref} id="marker">
            <div id="dot"></div>
        </div>
    );
});

export default Marker;
