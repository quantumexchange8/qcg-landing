import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); //to access the current location object. It returns an object representing the current URL location of the browser.

  useEffect(() => {
    window.scrollTo(0, 0); //scrolling the page to the top
  }, [location]); //This array specifies the values that the effect depends on. When any value in this array changes, the effect will be re-executed. 

  return null;
}

export default ScrollToTop;