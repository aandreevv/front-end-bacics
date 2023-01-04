import React, {useState} from "react";

function Image({imgSrc}) {
    const defaultWidth = 800;
    const maxWidth = 1200;
    const minWidth = 400;
    const [addDisabled, setAddDisabled] = useState(false);
    const [increaseDisabled, setIncreaseDisabled] = useState(true);
    const [decreaseDisabled, setDecreaseDisabled] = useState(true);
    const [deleteDisabled, setDeleteDisabled] = useState(true);
    const [imgWidth, setImageWidth] = useState(defaultWidth);

    function onAddClick() {
        setAddDisabled(true);
        setIncreaseDisabled(false);
        setDecreaseDisabled(false)
        setDeleteDisabled(false);
    }

    function onDeleteClick() {
        setAddDisabled(false);
        setIncreaseDisabled(true);
        setDecreaseDisabled(true);
        setDeleteDisabled(true);
    }

    function onIncreaseClick() {
        setImageWidth(imgWidth + 20);
        if (imgWidth >= maxWidth) {
            setIncreaseDisabled(true);
        }
        setDecreaseDisabled(false);
    }

    function onDecreaseClick() {
        setImageWidth(imgWidth - 20);
        if (imgWidth <= minWidth) {
            setDecreaseDisabled(true);
        }
        setIncreaseDisabled(false);
    }

    return(
        <div>
            <div className="buttons">
                <button id="addImg"
                        disabled={addDisabled}
                        onClick={onAddClick}>Додати</button>
                <button id="increaseImgSize"
                        disabled={increaseDisabled}
                        onClick={onIncreaseClick}>Збільшити</button>
                <button id="decreaseImgSize"
                        disabled={decreaseDisabled}
                        onClick={onDecreaseClick}>Зменшити</button>
                <button id="deleteImg"
                        disabled={deleteDisabled}
                        onClick={onDeleteClick}>Видалити</button>
            </div>
            <img src={imgSrc} width={imgWidth} alt="inserted" hidden={!addDisabled}/>
        </div>
    );
}

export default Image;
