import "./index.css";

function Option({ img, name }) {
    return (
        <div id="option">
            <img id="option-img" src={img} alt={`option ${name} image`} />{" "}
            <div>{name}</div>
        </div>
    );
}

export default Option;
