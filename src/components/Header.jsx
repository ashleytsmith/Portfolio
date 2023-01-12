import '../styles/Header.scss';

import { useEffect } from 'react';
import { gsap } from "gsap";

function Header() {

  useEffect(function() {
 
    gsap.to(
      
    ".title", 
    { backgroundPosition: "-960px 0", duration: 30, repeat: -1 }
    );
   
  }, []);


  return (


    <div className="container-fluid p-5 my-5 text-center">
      <h1 className = "title"> Ashley Developer and Scientist</h1>
    </div>


  );
}

export default Header;
