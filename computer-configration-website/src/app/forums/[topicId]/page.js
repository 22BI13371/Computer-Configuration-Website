"use client";

import { useParams } from 'next/navigation';
import './topic.css'; // Import topic-specific styles

export default function TopicPage() {
    const params = useParams();
    const { topicId } = params;
    
    // console.log("topicId:", topicId); // Debugging: Check topicId in console
    
    // Updated topic data
    const topics = {
        topic1: {
            title: 'Topic 1 Title',
            posts: [
                'Post 1 Content',
                'Post 2 Content',
                'Post 3 Content',
            ],
        },
        topic2: {
            title: 'Topic 2 Title',
            posts: [
                'Post A Content',
                'Post B Content',
            ],
        },
    };
    
    const topic = topics[topicId];
    
    if (!topic) {
        return <div className="forums-container">Topic not found.</div>;
    }
    
    return (
        <div className="forums-container">
      <div className="forum-header-bar">
        <div className="header-wrap">
          <div className="user-profile-box">
            <img src="/avatar-placeholder.png" alt="User Avatar" /> 
            <a href="/profile" className="user-name">User</a>
            <div className="icons">
              <i className="fas fa-comment-dots"></i> 
              <i className="fas fa-bell"></i> 
              <i className="fas fa-cog"></i> 
            </div>
          </div>
        </div>
      </div>

      <h1>{topic.title}</h1>
      <div className="forum-posts">
        {topic.posts.map((post, index) => (
            <div key={index} className="post">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}
