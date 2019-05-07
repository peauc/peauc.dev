import Link from 'next/link'

const linkStyle = {
    textDecoration: 'none',
    marginRight: 15
};

const Header = () => (
    <div className="header">

        <div id="navbar">
            <ul>
                <li>
                    <div id='logo'>
                        <Link href="/">
                            <a style={linkStyle}> <img src="https://pngimage.net/wp-content/uploads/2019/06/logo-placeholder-png-2.png" height="30" width="30" /></a>
                        </Link>
                    </div>
                </li>
                <li>
                    <Link href="/projects">
                        <a style={linkStyle}>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <a style={linkStyle}>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a style={linkStyle}>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
        <style jsx >{`
        #navbar {
            overflow: hidden;
            background-color: #333;
        }
 
        #navbar ul li {
            float: left;
            display: block;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }                
        
        #navbar ul li a {
            color: #f2f2f2;
            text-decoration: none;
        }
        
        #header{
            font-family: 'Arial';
        }

    `}</style>
    </div>
);

export default Header
