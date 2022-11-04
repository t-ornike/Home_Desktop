import '../context.css';
import React,{useRef,useEffect} from 'react';
function Context({text,liItem,setShow,show}) {
    const contextBoxRef = useRef();

    useEffect(() => {
        function handleOutOfContextClick(event) {
            const clickedElement = event.target;
            const contextMenu = contextBoxRef.current;
            if(!contextMenu.contains(clickedElement)) {
                handleShowFromContext(liItem);
            }
        }
        document.addEventListener('click',handleOutOfContextClick);
    } )

    function handleShowFromContext(liItem) {
        liItem.show = false;
        setShow((show === true ? false : true));
    }   
    return (
        <>
            <div className='context-wrapper'>
                <div className="context-box" ref={contextBoxRef}>
                    <p>{text}</p>
                </div>
            </div>
            <div className='btns'>
                <button onClick={()=>handleShowFromContext(liItem)}>Edit</button>
                <button onClick={()=>handleShowFromContext(liItem)}>Close</button>
            </div>
        </>
    )
}

export default Context;