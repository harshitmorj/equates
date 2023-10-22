import React from 'react';

const Footer = () => {
    const footerStyle = {
        // background: 'rgba(152, 21, 214, 1.0)', // Set the background color with 80% opacity
        color: 'white', // Set the text color
    };

    return (
        <footer style={footerStyle} className="absolute left-0 right-0 p-4 mt-auto w-full bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <div className="mb-4 p-2">
                    <h4 className="text-xl font-bold">olee.space</h4>
                    <p>Pune, MH</p>
                    <p>411038</p>
                </div>
                <div className="mb-4 p-2">
                    <h4 className="text-xl font-bold">Contact Us</h4>
                    <p>
                        Email:{' '}
                        <a href='mailto:ceo@citoto.com'>
                            ceo@citoto.com
                        </a>
                    </p>
                    <p>Phone: +91 9921981259</p>
                </div>
            </div>
            {/* <div className='text-center text-sm'>
                <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="/cookies" className="hover:text-gray-300">Cookies</a>
            </div> */}
        </footer>
    );
};

export default Footer;
