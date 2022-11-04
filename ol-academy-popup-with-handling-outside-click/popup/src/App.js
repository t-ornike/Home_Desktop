import './App.css';
import Popup from './components/popup';

import React, { useState } from 'react';



function App() {
  const [showPopup, setShowPopup] = useState(true);

  function closePopup() {
    setShowPopup(false);
  }


  return (
    <>
      <div>

        { showPopup && <Popup close = {closePopup}/> }
        
      </div>
    </>

  );
}

export default App;
