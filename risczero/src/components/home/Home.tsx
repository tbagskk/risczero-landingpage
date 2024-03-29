import './Home.css';
import { useState, useEffect } from 'react';
import Logo from '../../Assets/logo.webp'
import World from '../../Assets/world.svg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";



export default function Home() {

    const [scrollSize, setScrollSize] = useState(100);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const newSize = 100 - scrollPosition * 0.1; // Par exemple, réduire la taille de l'image de 0.1% par pixel de défilement
        setScrollSize(newSize);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='home-container'>
           <div className="defileParent">
                <span className="defile" data-text=" Texte défilant en css et l'utilisation de l'attribut data-text pour fournir un roulement continu "> TODAY, WE ARE SHARING ZKKYC, AN OPEN-SOURCE PROOF-OF-CONCEPT DEMO FOR APPLICATION AND PROTOCOL DEVELOPERS TO ADOPT SECURE, PRIVACY-FOCUSED KNOW YOUR CUSTOMER (KYC) PROCEDURES USING ZERO-KNOWLEDGE PROOFS. BUILT USING OUR ZKVM.</span>
            </div>
            <div className='home-header'>
                <div className='home-header-logo'>
                    <img className='home-header-logo-img' src={Logo} />

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

            <div className='home-world'>
                <img  style={{ width: `${scrollSize}%`, height: 'auto' }} className='home-world-img' src={World} />

              
            </div>
        </div>
    );
}
