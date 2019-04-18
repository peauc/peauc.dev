import Link from 'next/link'

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div className="header">
        <div id="logo">
            <Link href="/">
                <a style={linkStyle}><img src="https://pngimage.net/wp-content/uploads/2019/06/logo-placeholder-png-2.png" height="30" width="30" /></a>
            </Link>
        </div>
        <div id="navbar">
            <ul>
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
      .header{
        font-family: 'Arial';
      }

     
    `}</style>
    </div>
)

export default Header
