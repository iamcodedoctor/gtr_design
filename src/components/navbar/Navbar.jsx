import "./navbar.css"
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import logo from "../../assets/gtr_nav_logo.png"
import {useState} from "react";

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgtr">What is GTR</a></p>
            <p><a href="#posiibilities">Customizations</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#bolg">Library</a></p>
        </>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gtr-navbar">
            <div className="gtr-navbar-links">
                <div className="gtr-navbar-links-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gtr-navbar-links-container">
                    <Menu/>
                </div>
            </div>
            <div className="gtr-navbar-sign">
                <p>Sign In</p>
                <button type={'button'}>Sign Up</button>
            </div>
            <div className="gtr-navbar-menu">
                {
                    toggleMenu ? (<RiCloseLine color={'white'} size={26} onClick={() => setToggleMenu(false)}/>)
                        :
                        (<RiMenu3Line color={'white'} size={26} onClick={() => setToggleMenu(true)}/>)
                }
                {
                    toggleMenu && (
                        <div className={'gtr-navbar-menu-container scale-up-center'}>
                            <div className={'gtr-navbar-menu-container-links'}>
                                <Menu/>
                                <div className='gtr-navbar-menu-container-links-sign'>
                                    <p>Sign In</p>
                                    <button type={'button'}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar