"use client";

import { useParams } from 'next/navigation';
import './topic.css';

export default function TopicPage() {
    // const params = useParams();
    // const { topicId } = params;
    const { topicId } = useParams(); // Extract topicId from URL
    console.log("topicId:", topicId); // Debugging: Check topicId in console
    
    // const topics = {
    //     topic1: {
    //         title: 'Topic 1 Title',
    //         posts: [
    //             'Post 1 Content',
    //             'Post 2 Content',
    //             'Post 3 Content',
    //         ],
    //     },
    //     topic2: {
    //         title: 'Topic 2 Title',
    //         posts: [
    //             'Post A Content',
    //             'Post B Content',
    //         ],
    //     },
    //     topic3: {
    //         title: 'Topic 3',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    //     topic4: {
    //         title: 'Topic 4',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    //     topic5: {
    //         title: 'Topic 5',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    //     topic6: {
    //         title: 'Topic 6',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    //     topic7: {
    //         title: 'Topic 7',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    //     topic8: {
    //         title: 'Topic 8',
    //         posts: [
    //             'Link',
    //             'Link',
    //         ],
    //     },
    // };
    

    // const topic = topics[topicId];
    
    // if (!topic) {
    //     return <div className="forums-container">Topic not found.</div>;
    // }
    
    return (
        <div className="forums-container">
          {/* Header Bar (kept the same) */}
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
      
          {/* Page Content */}
          <div className="content-container">
            {/* Page Title */}
            <div>
                <div className='title-wrap'>
                    <h1 className="title">Systems</h1>
                </div>
                <p className="subtitle">Forums</p>
            </div>
      
            {/* Table-like Layout */}
            <div className="table">
              <div className="row header-row">
                  <div className="left-column">Forums</div>
                  <div className="right-column">Recent top posts</div>
              </div>

              <div className="row">
                <div className="left-column">Part list options wanted</div>
                <div className="right-column">
                  <ol>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ol>
                </div>
              </div>
      
              <div className="row">
                <div className="left-column">Build a PC for me</div>
                <div className="right-column">
                  <ol>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ol>
                </div>
              </div>
      
              <div className="row">
                <div className="left-column">Hardware troubleshooting</div>
                <div className="right-column">
                  <ol>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ol>
                </div>
              </div>
      
              <div className="row">
                <div className="left-column">Laptops recommendations</div>
                <div className="right-column">
                  <ol>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
    );      
}
