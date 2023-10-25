import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = ({ activeTab, toggle }) => {
    const [dropDown, setDropDown] = useState(false);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const dropdownRef = useRef(null);
    const headerRef = useRef(null);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);

        // Detect scroll events to hide/show the header
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getPageName = () => {
        switch (activeTab) {
            case 'home':
                return 'Home';
            case 'technology':
                return 'Technology';
            case 'products':
                return 'Products';
            case 'about':
                return 'About Us';
            case 'contact':
                return 'Contact Us';
            default:
                return '';
        }
    };

    return (
        <header
            ref={headerRef}
            className={`bg-black text-white absolute p-2 top-0 w-full z-30 transition-transform ${isHeaderVisible ? 'transform translateY(0)' : 'transform translateY(-100%)'
                }`}
        >
            <div className="mx-auto flex justify-between items-center p-2">
                <div className="flex items-center">
                    {/* <img src={logo} alt="Logo" className="h-20" /> */}
                    <div className='text-2xl font-bold text-white p-2 lg:hidden'>
                        <p>{getPageName()}</p>
                    </div>
                </div>
                <div className="relative flex" ref={dropdownRef}>
                    <button
                        className={`lg:hidden py-4 transition-transform duration-300 transform ${dropDown ? 'rotate-180' : 'rotate-0'}`}
                        onClick={toggleDropDown}
                    >
                        {!dropDown ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
                <nav className="space-x-20 pr-20 text-2xl flex text-white hidden lg:flex p-2">
                    <NavLink
                        to="/"
                        exact
                        className={`relative group flex items-center justify-center ${activeTab === 'home' ? 'text-purple-500 hover:text-purple-500' : 'hover:text-white'}`}
                        onClick={() => toggle('home')}
                    >
                        <div className="h-1 w-full -mb-2 bg-blue-500 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        Home
                    </NavLink>
                    <NavLink
                        to="/technology"
                        className={`relative group flex items-center justify-center ${activeTab === 'technology' ? 'text-purple-500 hover:text-purple-500' : 'hover:text-white'}`}
                        onClick={() => toggle('technology')}
                    >
                        <div className="h-1 w-full -mb-2 bg-blue-500 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        Technology
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={`relative group flex items-center justify-center   ${activeTab === 'products' ? 'text-purple-500 hover:text-purple-500' : 'hover:text-white'}`}
                        onClick={() => toggle('products')}
                    >
                        <div className="h-1 w-full -mb-2 bg-blue-500 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        Products
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`relative group flex items-center justify-center   ${activeTab === 'about' ? 'text-purple-500 hover:text-purple-500' : 'hover:text-white'}`}
                        onClick={() => toggle('about')}
                    >
                        <div className="h-1 w-full -mb-2 bg-blue-500 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        About Us
                    </NavLink>
                    {/* <NavLink
                        to="/contact"
                        className={` p-3 hover:bg-blue-500 hover:scale-110 transition duration-500 ${activeTab === 'contact' ? 'bg-gray-200 text-purple-700 hover:text-purple-700' : 'bg-purple-700 hover:text-white text-white'}`}
                        onClick={() => toggle('contact')}
                    >
                        Contact Us
                    </NavLink> */}

                </nav>
                <nav
                    className={`absolute right-4 top-20 mt-2 w-5/6 truncate text-center bg-black text-2xl text-white font-krona border border-gray-300 rounded-lg shadow-lg overflow-hidden ${dropDown ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        } transition-all duration-300 transform origin-top lg:hidden`}
                >
                    <Link to="/" className={`block p-4 transition duration-300 hover:bg-gray-800 ${activeTab === 'home' ? 'bg-gray-800 text-purple-500' : ''}`} onClick={() => { toggle('home'); toggleDropDown(); }}> Home </Link>
                    <Link to="/technology" className={`block p-4 transition duration-300 hover:bg-gray-800 ${activeTab === 'technology' ? 'bg-gray-800 text-purple-500' : ''}`} onClick={() => { toggle('technology'); toggleDropDown(); }}> Technology </Link>
                    <Link to="/products" className={`block p-4 transition duration-300 hover:bg-gray-800 ${activeTab === 'products' ? 'bg-gray-800 text-purple-500' : ''}`} onClick={() => { toggle('products'); toggleDropDown(); }}> Products </Link>
                    <Link to="/about" className={`block p-4 transition duration-300 hover:bg-gray-800 ${activeTab === 'about' ? 'bg-gray-800 text-purple-500' : ''}`} onClick={() => { toggle('about'); toggleDropDown(); }}> About Us </Link>
                    {/* <Link to="/contact" className={`block p-4 transition duration-300 hover:bg-gray-800 ${activeTab === 'contact' ? 'bg-gray-800 text-purple-500' : ''}`} onClick={() => { toggle('contact'); toggleDropDown(); }}> Contact Us </Link> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
