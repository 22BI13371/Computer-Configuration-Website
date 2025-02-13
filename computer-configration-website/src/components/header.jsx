// import '@/styles/header.css'
// import Link from 'next/link'
// import Dropbox from '@/components/dropbox'

// const Header = () => {
//     return (<>
//       <header className="header">
//       <nav className="navbar">
//         <div className="nav-links">
//           <Link href={"/"} className="nav-item">Home</Link>
//           <a href="/builder" className="nav-item">Builds</a>
//           <Dropbox className="nav-item"></Dropbox>
//           <a href="/complete_build" className="nav-item">Complete Builds</a>
//           <a href="/forums" className="nav-item">Forum</a>
//           <a href="#" className="nav-item">Contact</a>
//         </div>
//         <div className="nav-buttons">
//           <Link href={"/login"} legacyBehavior><button className="btn">Sign in</button></Link>
//           <Link href={"/register"} legacyBehavior><button className="btn">Register</button></Link>
//         </div>
//       </nav>
//     </header>
//     </>);
// }
// export default Header

import '@/styles/header.css';
import Link from 'next/link';
import Dropbox from '@/components/dropbox';
import LogoutButton from '@/components/LogoutButton';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const Header = () => {
    // Server-side: Check token in cookies
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value;

    let isLoggedIn = false;

    // Verify and decode token
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            isLoggedIn = true;
        } catch (error) {
            console.error('Token verification failed:', error);
        }
    }

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link href="/" className="nav-item">Home</Link>
                        <a href="/builder" className="nav-item">Builds</a>
                        <Dropbox className="nav-item"></Dropbox>
                        <a href="/complete_build" className="nav-item">Complete Builds</a>
                        <a href="/forums" className="nav-item">Forum</a>
                        {/* <a href="#" className="nav-item">Contact</a> */}
                    </div>
                    <div className="nav-buttons">
                        {!isLoggedIn ? (
                            <>
                                <Link href="/login" legacyBehavior>
                                    <button className="nav-btn">Sign in</button>
                                </Link>
                                <Link href="/register" legacyBehavior>
                                    <button className="nav-btn">Register</button>
                                </Link>
                            </>
                        ) : (
                            <LogoutButton />
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
