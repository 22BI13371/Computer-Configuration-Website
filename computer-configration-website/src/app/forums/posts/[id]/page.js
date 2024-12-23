"use client";

import { useParams } from 'next/navigation';
import PostContent from '../../../../components/PostContent';
import styles from './post.module.css';

export default function PostPage() {
  const { id } = useParams(); // Get post ID dynamically

  // Mock data for the post (replace with API later)
  const post = {
    id,
    title: `Post Title for ${id}`,
    body: `This is the content of the post with ID ${id}.`,
    author: 'Author Name',
    comments: [
      { id: 1, text: 'Great post!' },
      { id: 2, text: 'Very helpful, thanks!' },
    ],
  };

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
     
        <div>
          <div className="title-wrap">
            <h1 className="title">Title</h1>
          </div>
          <p className="subtitle">breadcrumb</p>
        </div>

        <div className={styles.postContainer}>
        <PostContent post={post} />
        </div>
    </div> 
  );
}
