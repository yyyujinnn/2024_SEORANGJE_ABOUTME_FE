import Router from "./Router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
    <Helmet>
      <meta property="og:title" content="AboutMe" />  
      <meta property="og:image" content="../public/icons/AboutMeTmb.png" />
      {/* <meta property="og:url" content="https://aboutme.d1pt3wqvnh1bfv.amplifyapp.com/" /> */}
      <meta property="og:url" content="https://fix-inapp.dxpjcplfcmdfo.amplifyapp.com/" />
      <meta property="og:description" content="네フГ 생각ṑト는 ∟ト를 알㈃ㅕ줘! (੭•̀ᴗ•̀)੭" />
    
      <meta name="twitter:title" content="AboutMe" />
      <meta name="twitter:image" content="../public/icons/AboutMeTmb.png" />    
      <meta name="twitter:description" content="네フГ 생각ṑト는 ∟ト를 알㈃ㅕ줘! (੭•̀ᴗ•̀)੭" />
      </Helmet>
      <Router />
    </>
  );
}

export default App;
