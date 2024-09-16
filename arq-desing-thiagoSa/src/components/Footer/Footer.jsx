import { Link } from 'react-router-dom'

import Logo from '../assets/dncLogo.svg'
import BrasilLogo from '../assets/brazil_icon.svg'
import UsaLogo from '../assets/usa_icon.svg'
import FaceLogo from '../assets/face.svg'
import IntaLogo from '../assets/intagran.svg'
import LinkeLogo from '../assets/linkedin.svg'
import TwiterLogo from '../assets/twiter.svg'
import './Footer/Footer.css'


function Footer () {
    return(
        <footer>
        <div className="container">
            <div className='d-flex jc-sapace-beteween'>
                <div className='footer-logo-col'>
                    <img src={Logo} />
                    <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className='d-fle social-links'>
                        
                        <a href="" target='_blank'>
                            <img src={FaceLogo} alt="" srcset="" />
                        </a>
                        <a href="" target='_blank'>
                            <img src={IntaLogo} alt="" srcset="" />
                        </a>
                        <a href="" target='_blank'>
                            <img src={LinkeLogo} alt="" srcset="" />
                        </a>
                        <a href="" target='_blank'>
                            <img src={TwiterLogo} alt="" srcset="" />
                        </a>
                       
                    </div>
                </div>
            </div>
            
        </div>
        </footer>
    )
}

export default Footer