import React, {useRef,useEffect}from "react";
import '../popup.css';


function Popup({close}) {
    const popupRef = useRef();

    useEffect( () => {
        function handlePopup(event) {
            const clickedDomElement = event.target;
            const popupElem = popupRef.current;
            if ( !popupElem.contains(clickedDomElement) ) {
                close();
            } 
        }

        document.addEventListener('click', handlePopup)
    })


    return (
        <>
            <div className="popup">
                <div className="popup-inner" ref={popupRef}>
                    <h1>My Popup</h1>
                    <button className="btn" onClick={close}>Close</button>
                </div>
            </div>
        </>
    )
}


export default Popup;