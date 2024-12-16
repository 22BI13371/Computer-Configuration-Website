import Link from 'next/link';
import './forum.css';
import { getForums } from './forum';

export default function ForumsPage() {
  const forums = getForums();

  return (
    <div className="forums-container">
      <div className="forum-header-bar">
        <div className="header-wrap">
          <div className="user-profile-box">
            <img src="/avatar-placeholder.png" alt="User Avatar" /> {/* Replace with user avatar */}
            <a href="/profile" className="user-name">User</a>
            <div className="icons">
              <i className="fas fa-comment-dots"></i> 
              <i className="fas fa-bell"></i> 
              <i className="fas fa-cog"></i> 
            </div>
          </div>
        </div>
      </div>

      <div className='title-wrap'>
        <h1 className='main-page-title'>Forums</h1>

      </div>
      <div className="forums-grid">
        {forums.map((forum) => (
          <Link key={forum.id} href={forum.link}>
            <div className="forum-box">
              <span>{forum.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
