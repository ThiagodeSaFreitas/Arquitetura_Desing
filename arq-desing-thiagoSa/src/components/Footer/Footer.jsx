import { Link } from "react-router-dom";

import Logo from "../../assets/dncLogo.svg";
import BrasilLogo from "../../assets/brazil_icon.svg";
import UsaLogo from "../../assets/usa_icon.svg";
import FaceLogo from "../../assets/face.svg";
import IntaLogo from "../../assets/intagran.svg";
import LinkeLogo from "../../assets/linkedin.svg";
import TwiterLogo from "../../assets/twiter.svg";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-sapace-beteween">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" />
            <p className="grey-1-color">
              A escola que prepara você para as profissões em alta no mercado de
              trabalho.
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
          <div className="d-flex">
              <div className="footer-col">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                   <h3>Contact</h3>
                   <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p> 
                   <p className="grey-1-color">suporte@escoladnc.com.br</p> 
                   <p className="grey-1-color">(19) 99187-4342</p> 
              </div>
            </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
            <p className="grey-1-color">Copyright © DNC - 2024</p>
            <div className="langs-area d-flex">
                <img src={BrasilLogo} height="30px"/>
                <img src={UsaLogo} height="30px"/>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
