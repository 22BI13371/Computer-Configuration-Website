import '@/styles/header.css'
import Link from 'next/link'
const Header = () => {
    return(
        <>
        <header className="header">
        <nav className="navbar">
          <div className="nav-links">
            <Link href={"/"}>Home</Link>
            <a href="/builder">Builds</a>
            <a href="/products">Products</a>
            <a href="/complete-build">Complete Builds</a>
            <a href="#">Forum</a>
            <a href="#">Contact</a>
          </div>
          <div className="nav-buttons">
            <button className="btn">Sign in</button>
            <button className="btn">Register</button>
          </div>
        </nav>
      </header>
      </>
    )
}
export default Header