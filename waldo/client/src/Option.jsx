import "./index.css";

function Option({ img, name, checkCoordinates, id, refx, isHeader }) {
    return (
        <div
            id={id}
            data-key={name}
            onClick={checkCoordinates}
            ref={isHeader ? refx : null}
        >
            <img id="option-img" src={img} alt={`option ${name} image`} />{" "}
            <div>{name}</div>
        </div>
    );
}

export default Option;
