/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Header.css'

export default function Header(props) {
    const { aboutTop, aboutHeight } = props;
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
    }
    
    return (
        <header className="header__container flex">
            <button className='primary-nav-button'
                    aria-controls="primary-navigation" 
                    aria-expanded={visible}
                    onClick={handleClick}>
                <svg fill={`${ (aboutTop-24 <= 0 && aboutTop + aboutHeight-24 >= 0) ? "#edeae1" : "var(--body-clr)" }`}
                    viewBox="0 0 100 100" width="60">
                    <rect   className="line top" 
                            width="80" 
                            height="8"
                            x="10" y="25" rx="5">
                    </rect>
                    <rect   className="line middle" 
                            width="80" 
                            height="8"
                            x="10" y="45" rx="5">
                    </rect>
                    <rect   className="line bottom" 
                            width="80" 
                            height="8"
                            x="10" y="65" rx="5">
                    </rect>
                </svg>
            </button>

            <nav>
                <ul id="primary-navigation"
                    data-visible={visible} className="primary-navigation flex">
                    <li>
                        <NavHashLink to="#projects"
                                     onClick={handleClick}>
                            Projecten
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to="#skills"
                                     onClick={handleClick}>
                            Vaardigheden
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to="#about"
                                     onClick={handleClick}>
                            Over mij
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink to="#contact"
                                     onClick={handleClick}>
                            Contact
                        </NavHashLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}