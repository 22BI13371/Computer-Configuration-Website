"use client";

import { useParams } from "next/navigation";
import "./topic.css";
import Link from "next/link";

export default function TopicPage() {
  const { topicId } = useParams(); // Extract topicId from URL
  console.log("topicId:", topicId); // Debugging: Check topicId in console

  const subtopics = {
    "Part list options wanted": {
      id: "part-list-options",
      posts: [
        { id: "post1", title: "Best GPU for gaming" },
        { id: "post2", title: "Affordable CPU suggestions" },
        { id: "post3", title: "Choosing the right PSU" },
      ],
    },
    "Build a PC for me": {
      id: "build-a-pc",
      posts: [
        { id: "post4", title: "Budget PC under $500" },
        { id: "post5", title: "Mid-range build guide" },
        { id: "post6", title: "High-end PC suggestions" },
      ],
    },
    "Hardware troubleshooting": {
      id: "hardware-troubleshooting",
      posts: [
        { id: "post7", title: "PC not booting" },
        { id: "post8", title: "Overheating issues" },
        { id: "post9", title: "RAM compatibility" },
      ],
    },
    "Laptops recommendations": {
      id: "laptops-recommendations",
      posts: [
        { id: "post10", title: "Best laptop for students" },
        { id: "post11", title: "Gaming laptops under $1000" },
        { id: "post12", title: "Ultrabooks for travel" },
      ],
    },
  };

  console.log("subtopics:", subtopics);


  return (
    (<div className="forums-container">
      {/* Header Bar */}
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
        <div>
          <div className="title-wrap">
            <h1 className="title">Systems</h1>
          </div>
          <p className="subtitle">Forums</p>
        </div>

        {/* Table-like Layout */}
        <div className="table">
          <div className="row header-row">
            <div className="left-column">Subtopics</div>
            <div className="right-column">Recent top posts</div>
          </div>

          {Object.entries(subtopics).map(([forumTitle, { id, posts }], index) => (
            <div className="row" key={index}>
              {/* Link to subtopic page */}
              <div className="left-column">
                <Link href={`/forums/subtopics/${id}`} legacyBehavior>{forumTitle}</Link>
              </div>

              {/* Posts */}
              <div className="right-column">
                <ol>
                  {posts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/forums/posts/${post.id}`} legacyBehavior>{post.title}</Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)
  );
}
