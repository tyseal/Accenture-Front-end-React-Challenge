import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'

export default function NavBar() {
    const [menuToggle, setMenuToggle] = useState(false)

    useEffect(() => {
        if(menuToggle) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        
        const mobileMenuEvt = () => {
            setMenuToggle(!menuToggle)
        }
        document.querySelectorAll(".mobile-nav-menu a")
            .forEach(el => {
                el.addEventListener("click", mobileMenuEvt)
            })

        return () => {
            document.querySelectorAll(".mobile-nav-menu a")
                .forEach(el => {
                    el.removeEventListener("click", mobileMenuEvt)
                })
        }
    }, [menuToggle])

    return (
        <header className='navbar'>
            <div className='container'>
                <a className='block' href='#'>
                    <img src={logo} alt='Accenture Brand' />
                </a>
                <nav className='nav-menu'>
                    <ul>
                        <li>
                            <a href='#services-section'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Industries</a>
                        </li>
                        <li>
                            <a href='#case-studies-section'>Cases</a>
                        </li>
                        <li>
                            <a href='#footer'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='nav-actions'>
                    <a href='#footer' className='py-2 px-4 bg-white rounded-3xl font-bold text-sm block'>Let's talk</a>
                </div>
                <div className='mobile-menu-toggle' onClick={() => setMenuToggle(!menuToggle)}>
                    <span className="material-symbols-outlined">{ !menuToggle ? "menu" : "close" }</span>
                </div>
                <div className={`mobile-nav-menu ${menuToggle ? "block" : "hidden"}`}>
                    <ul>
                        <li>
                            <a href='#services-section'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Industries</a>
                        </li>
                        <li>
                            <a href='#case-studies-section'>Cases</a>
                        </li>
                        <li>
                            <a href='#footer'>Contact</a>
                        </li>
                        <li>
                            <a href='#footer' className='py-2 px-4 bg-white rounded-3xl font-bold text-sm block text-black'>Let's talk</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
