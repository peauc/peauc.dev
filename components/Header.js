import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}><img src="https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-2.png" height="30" width="30" ></img></a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle}>Portfolio</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
 </div>
)

export default Header
