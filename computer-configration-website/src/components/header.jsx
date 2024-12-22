import '@/styles/header.css'
import Link from 'next/link'
import Dropbox from '@/components/dropbox'

const Header = () => {
    return (<>
      <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <Link href={"/"} className="nav-item">Home</Link>
          <a href="/builder" className="nav-item">Builds</a>
          <Dropbox className="nav-item"></Dropbox>
          <a href="/complete_build" className="nav-item">Complete Builds</a>
          <a href="/forums" className="nav-item">Forum</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-buttons">
          <Link href={"/login"} legacyBehavior><button className="btn">Sign in</button></Link>
          <Link href={"/register"} legacyBehavior><button className="btn">Register</button></Link>
        </div>
      </nav>
    </header>
    </>);
}
export default Header