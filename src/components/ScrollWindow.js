import React from 'react'
import '../styles/scroll-sec.css'

function reveal(){
    var a = document.getElementsByClassName("scroller_");
    
    if(window.scrollBy(25)){
        
    }

    }
}

function ScrollWindow() {
  return (
    <div className="scroll-win">
      <div className="scroller_1">
        <img src="../assets/kit.webp" alt="Kit" />
      </div>

      <div className="scroller_">
        <img src="../assets/tumbler.webp" alt="Tumbler 1" />
      </div>

      <div className="scroller_">
        <img src="../assets/tumbler_1.webp" alt="Tumbler 2" />
      </div>

      <div className="scroller_">
        <img src="../assets/cotton_eartips.webp" alt="Cotton Eartips" />
      </div>

      <div className="scroller_">
        <img src="../assets/loofah.webp" alt="Loofah" />
      </div>

      <div className="scroller_">
        <img src="../assets/straws.webp" alt="Straws" />
      </div>

      <div className="scroller_">
        <img src="../assets/brush.webp" alt="Brushes" />
      </div>
    </div>
  );
}

export default ScrollWindow