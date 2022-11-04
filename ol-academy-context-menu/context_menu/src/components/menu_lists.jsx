import '../menu_lists.css'
import React, {useState} from 'react';
import Context from './context';

const myList = [ {name:'first', show:false}, {name:'second', show:false},
                 {name:'third', show:false}, {name:'fourth', show:false} ]

const prev = [];


function Menu() {
    const [show, setShow] = useState(false);

    function handleClick(index) {
        myList[index].show = true;
        prev.push(myList[index]);
        if (prev.length > 1&&(myList[index]!==prev[prev.length-2])) prev[prev.length-2].show = false;
        setShow((show === true ? false : true));
    }

    return (
        <ul>
            { myList.map((liItem,index)=> <li key={liItem.name} onContextMenu={()=>handleClick(index)}
             className ={liItem.name}> {liItem.name} {liItem.show && <Context text = {liItem.name} liItem={liItem} setShow={setShow} show={show}/>} </li> ) }
        </ul>
    )
}

export default Menu;