"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./subtopic.module.css";

export default function SubtopicPage() {
  const { subtopicId } = useParams();

  const subtopics = {
    "part-list-options": {
      title: "Part List Options Wanted",
      posts: [
        { id: "1", title: "Best GPU for gaming", lastUpdated: "1 hour ago" },
        { id: "2", title: "Affordable CPU suggestions", lastUpdated: "2 hours ago" },
        { id: "3", title: "Choosing the right PSU", lastUpdated: "5 hours ago" },
      ],
    },
    "build-a-pc": {
      title: "Build a PC for Me",
      posts: [
        { id: "4", title: "Budget PC under $500", lastUpdated: "3 days ago" },
        { id: "5", title: "Mid-range build guide", lastUpdated: "1 week ago" },
        { id: "6", title: "High-end PC suggestions", lastUpdated: "2 weeks ago" },
      ],
    },
  };

  const subtopic = subtopics[subtopicId];

  if (!subtopic) {
    return <div className={styles.error}>Subtopic not found.</div>;
  }

  return (
    <div className="forums-container">
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
            <h1 className="title">{subtopic.title}</h1>
          </div>
          <p className="subtitle">Threads</p>
        </div>

        {/* Table-like Layout */}
        <div className="table">
          <div className="row header-row">
            <div className="left-column">Thread Title</div>
            <div className="right-column">Last Updated</div>
          </div>

          {subtopic.posts.length > 0 ? (
            subtopic.posts.map((post, index) => (
              <div className="row" key={index}>
                {/* Link to Post */}
                <div className="left-column">
                  <Link href={`/forums/posts/${post.id}`} legacyBehavior>
                    {post.title}
                  </Link>
                </div>

                {/* Last Updated (Placeholder for metadata) */}
                <div className="right-column">
                  {post.lastUpdated}
                </div>
              </div>
            ))
          ) : (
            <div className="row">
              <div className="left-column">No posts yet.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
