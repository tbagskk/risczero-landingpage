import './Home.css';
import { useState, useEffect } from 'react';
import Logo from '../../Assets/logo.webp'
import World from '../../Assets/world.svg'
import Pourcentage1 from '../../Assets/pourcentage1.svg'
import Pourcentage2 from '../../Assets/pourcentage2.svg'
import Pourcentage3 from '../../Assets/pourcentage3.svg'
import Pourcentage4 from '../../Assets/pourcentage4.svg'
import Brand1 from '../../Assets/icon1.svg';
import Brand2 from '../../Assets/icon2.svg';
import Brand3 from '../../Assets/icon3.svg';
import Brand4 from '../../Assets/icon4.svg';
import Brand5 from '../../Assets/icon5.svg';
import Brand6 from '../../Assets/icon6.svg';
import Brand7 from '../../Assets/icon7.svg';
import Brand8 from '../../Assets/icon8.svg';
import Brand9 from '../../Assets/icon9.svg';
import Brand10 from '../../Assets/icon10.svg';
import Brand11 from '../../Assets/icon11.svg';
import Brand12 from '../../Assets/icon12.svg';
import Brand13 from '../../Assets/icon13.svg';
import Brand14 from '../../Assets/icon14.svg';
import Investors1 from '../../Assets/investors1.svg';
import Investors2 from '../../Assets/investors2.svg';
import Investors3 from '../../Assets/investors3.svg';
import Investors4 from '../../Assets/investors4.svg';
import Investors5 from '../../Assets/investors5.svg';
import Investors6 from '../../Assets/investors6.svg';
import Investors7 from '../../Assets/investors7.svg';
import Investors8 from '../../Assets/investors8.svg';
import Infos1 from '../../Assets/infos1.svg';
import Infos2 from '../../Assets/infos2.svg';
import Infos3 from '../../Assets/infos3.svg';
import Infos4 from '../../Assets/infos4.svg';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";




export default function Home() {

    const [scrollSize, setScrollSize] = useState(100);
    //const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
       // setScrollPosition(currentPosition);
        const newSize = 100 - Math.min(currentPosition * 0.1, 70);
        setScrollSize(newSize); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log(scrollSize);
    },[scrollSize])

   // a ajouter a home-world -> style={{ paddingBottom: `${(scrollPosition >= startScrollingPosition && scrollPosition <= 800) ? scrollPosition - startScrollingPosition : (scrollPosition > 800) ? 800 - startScrollingPosition : 0}px` }}

    return (
        <div className='home-container-all'>
        <div className='home-container'>
           <div className="defileParent">
                <span className="defile" data-text=" Texte défilant en css et l'utilisation de l'attribut data-text pour fournir un roulement continu "> TODAY, WE ARE SHARING ZKKYC, AN OPEN-SOURCE PROOF-OF-CONCEPT DEMO FOR APPLICATION AND PROTOCOL DEVELOPERS TO ADOPT SECURE, PRIVACY-FOCUSED KNOW YOUR CUSTOMER (KYC) PROCEDURES USING ZERO-KNOWLEDGE PROOFS. BUILT USING OUR ZKVM.</span>
            </div>
            <div className='home-header'>
                <div className='home-header-logo'>
                    <img alt="" className='home-header-logo-img' src={Logo} />

                </div>

                <div className='home-header-menu'>
                    <div className='home-header-menu-button'>
                        <p>Technology</p>
                        <MdKeyboardArrowDown className='home-header-arrow'/>
                    </div>

                    <div className='home-header-menu-button'>
                        <p>Developers</p>
                        <MdKeyboardArrowDown className='home-header-arrow' />
                    </div>

                    <div className='home-header-menu-button'>
                        <p>About Us</p>
                        <MdKeyboardArrowDown className='home-header-arrow' />
                    </div>

                    <div className='home-header-menu-button'>
                        <p>Blog</p>
                    </div>

                    <div className='home-header-menu-button' id="home-header-doc">
                        <p>Docs</p>
                        <MdArrowOutward  className='home-header-arrow-right'/>
                    </div>
                </div>
            </div>

            <div className='home-title'>
                    <p className='home-title-title-text'>Universal Zero Knowledge</p>
                    <div className='home-title-container-subtitle'>
                        <div className='home-title-subtitle'>
                            <p className='home-title-subtitle-text'>Get to market fast with dramatically lower development costs on the first general purpose zkVM.</p>
                        </div>
                        <div className='home-title-button'>
                            <p>Get Started</p>
                   
                            <GoArrowRight className='home-title-button-arrow' />
                        </div>
                    </div>
            </div>

            <div className='home-world' >
                <img  alt="" style={{ width: `${scrollSize}%`, height: 'auto' }} className='home-world-img' src={World} />

              
            </div>

            <div className='home-infos'>
                <div style={{backgroundColor:"#3A3A3A"}} className='home-infos-box'>
                    <p className='home-infos-box-title'>Write Programs, Not Circuits</p>
                    <p className='home-infos-box-text'>Compatible with over 70% of the top 1000 Rust crates, so you can build your prototype fast without knowing cryptography or circuits.</p>
                    <img src={Infos1} alt="" className='home-infos-box-img'/>
                </div>
                <div style={{backgroundColor:"#B5B5B5"}} className='home-infos-box'>
                    <p className='home-infos-box-title'>Extensible, Upgradable</p>
                    <p className='home-infos-box-text'>Leverage typical software development cycles to easily iterate and upgrade your ZK application.</p>
                    <img src={Infos2} alt="" className='home-infos-box-img'/>
                </div>
                <div style={{backgroundColor:"#D9D9D9"}} className='home-infos-box'>
                    <p style={{color:"black"}} className='home-infos-box-title'>Fully Open Source</p>
                    <p style={{color:"black"}} className='home-infos-box-text'>We are building fully in the open, so you can develop with software that is growing with the broader community.</p>
                    <img src={Infos3} alt="" className='home-infos-box-img'/>
                </div>
                <div style={{backgroundColor:"#F2F1ED"}} className='home-infos-box'>
                    <p style={{color:"black"}} className='home-infos-box-title'>Easily Auditable</p>
                    <p style={{color:"black"}} className='home-infos-box-text'>Apps built with RISC Zero use existing computer standards, making them easily auditable by third parties and secure.</p>
                    <img src={Infos4} alt="" className='home-infos-box-img'/>
                </div>
            </div>

            <div className='home-pourcentage'>
                <div  className='home-pourcentage-box'>
                    <img alt="" className='home-pourcentage-img' src={Pourcentage1} />
                    <p> Compatibility with available Rust crates</p>
                </div>
                <div  className='home-pourcentage-box'>
                    <img alt="" className='home-pourcentage-img' src={Pourcentage2} />
                    <p> Gas fee savings (dependent on protocol design) </p>
                </div>
                <div  className='home-pourcentage-box'>
                    <img alt="" className='home-pourcentage-img' src={Pourcentage3} />
                    <p> To prove hashing 10K bytes through SHA-256 </p>
                </div>
                <div  className='home-pourcentage-box'>
                    <img alt="" className='home-pourcentage-img' src={Pourcentage4} />
                    <p> Faster ZK development timeline </p>
                </div>
            </div>

            <div className='home-brands'>
                <p className='home-brands-title'>Building with RISC Zero</p>
                <div className='home-brands-container-icons'>
                    <div className='home-brands-icons'>
                        <img src={Brand1} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand2} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand3} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand4} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand5} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand6} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand7} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand8} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand9} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand10} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand11} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand12} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand13} alt="" className='home-brands-img' />
                    </div>
                    <div className='home-brands-icons'>
                        <img src={Brand14} alt="" className='home-brands-img' />
                    </div>
                </div>
            </div>

            <div className='home-news'>
                <p className='home-brands-title'>Recent News</p>
                <div className='home-news-container-articles'>
                    <div className='home-news-articles'>
                        <p className='home-news-articles-title'>zkVM Performance Upgrades Roadmap - Q1, Q2 2024</p>
                        <div className='home-news-articles-container-date'>
                            <p>March 26, 2024</p>
                            <GoArrowRight className='home-news-button-arrow' />
                        </div>
                    </div>
                    <div className='home-news-articles'>
                        <p className='home-news-articles-title'>Jeremy Bruestle Steps Into the Role of CEO</p>
                        <div className='home-news-articles-container-date'>
                            <p>March 22, 2024</p>
                            <GoArrowRight className='home-news-button-arrow' />
                        </div>
                    </div>
                    <div className='home-news-articles'>
                        <p className='home-news-articles-title'>zkVM Performance Upgrades Roadmap - Q1, Q2 2024</p>
                        <div className='home-news-articles-container-date'>
                            <p>March 8, 2024</p>
                            <GoArrowRight className='home-news-button-arrow' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-investors'>
                <p className='home-brands-title'>Investors</p>
                <div className='home-investors-container-brands'>
                    <div className='home-investors-brands'>
                        <img src={Investors1} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors2} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors3} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors4} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors5} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors6} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors7} alt="" className='home-investors-img'/>
                    </div>
                    <div className='home-investors-brands'>
                        <img src={Investors8} alt="" className='home-investors-img'/>
                    </div>
                </div>
               
            </div>

            <div className='home-footer'>
                <div className='home-footer-left-container'>
                    <p className='home-footer-left-title'>Sign up for updates</p>
                    <form className='home-footerleft-form'>
                        <p className='home-footer-left-form-text'>Email</p>
                        <div className='home-footer-left-container-input'>
                            <input className='home-footer-left-input' type="text"></input>
                            <button className="home-footer-left-button" type="submit">Send</button>
                        </div>
                       
                    </form>

                </div>
                <div className='home-footer-right-container'>
                    <div className='home-footer-right-container-left'>
                        <p className='home-footer-right-text'>Github</p>
                        <p className='home-footer-right-text'>Discord</p>
                        <p className='home-footer-right-text'>Twitter</p>
                        <p className='home-footer-right-text'>YouTube</p>
                    </div>
                    <div className='home-footer-right-container-left'>
                        <p className='home-footer-right-text'>Developers</p>
                        <p className='home-footer-right-text'>Join the Team</p>
                        <p className='home-footer-right-text'>Terms of Service</p>
                        <p className='home-footer-right-text'>Policy</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
