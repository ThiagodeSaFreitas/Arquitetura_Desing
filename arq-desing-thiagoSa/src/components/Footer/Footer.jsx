import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/dncLogo.svg";
import BrasilLogo from "../../assets/brazil_icon.svg";
import UsaLogo from "../../assets/usa_icon.svg";
import FaceLogo from "../../assets/face.svg";
import IntaLogo from "../../assets/intagran.svg";
import LinkeLogo from "../../assets/linkedin.svg";
import TwiterLogo from "../../assets/twiter.svg";
import "../Footer/Footer.css";
import { AppContext } from "../../contexts/AppContext";

function Footer() {
  const appContext = useContext(AppContext)
  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-sapace-beteween mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" />
            <p className="grey-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="" target="_blank">
                <img src={FaceLogo} alt="" srcset="" />
              </a>
              <a href="" target="_blank">
                <img src={IntaLogo} alt="" srcset="" />
              </a>
              <a href="" target="_blank">
                <img src={LinkeLogo} alt="" srcset="" />
              </a>
              <a href="" target="_blank">
                <img src={TwiterLogo} alt="" srcset="" />
              </a>
            </div>
           
          </div>
          <div className="d-flex mobile-fd-column">
              <div className="footer-col">
                <h3>{appContext.languages[appContext.language].general.pages}</h3>
                <ul>
                  <li>
                    <Link to="/">{appContext.languages[appContext.language].menu.home}</Link>
                  </li>
                  <li>
                    <Link to="/about">{appContext.languages[appContext.language].menu.about}</Link>
                  </li>
                  <li>
                    <Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                   <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                   <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p> 
                   <p className="grey-1-color">suporte@escoladnc.com.br</p> 
                   <p className="grey-1-color">(19) 99187-4342</p> 
              </div>
            </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
            <p className="grey-1-color">Copyright © DNC - 2024</p>
            <div className="langs-area d-flex">
              <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
              <img src={BrasilLogo} height="30px"/>
              </Button>
              <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
              <img src={UsaLogo} height="30px"/>
              </Button>  
                
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
