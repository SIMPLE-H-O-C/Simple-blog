import { Link } from "react-router-dom";
import "../styles/AllPosts.css";

const allPosts = [
  {
    id: 1,
    title: "The Importance of Simplicity in Home Office Design",
    author: "Admin",
    date: "October 8, 2025",
    imageUrl: "https://placehold.co/600x400",
    excerpt:
      "Discover how a minimal and efficient workspace can enhance productivity and mental clarity when working from home.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Office Chair for Long Hours",
    author: "Admin",
    date: "October 4, 2025",
    imageUrl: "https://placehold.co/600x400",
    excerpt:
      "Comfort matters. We explore the best ergonomic options to keep your posture and focus in top shape.",
  },
  {
    id: 3,
    title: "5 Affordable Ways to Refresh Your Workspace",
    author: "Admin",
    date: "September 29, 2025",
    imageUrl: "https://placehold.co/600x400",
    excerpt:
      "Small upgrades can make a big difference. Here are five simple ideas to breathe new life into your office space.",
  },
];

export default function AllPosts() {
  return (
    <section className="posts-page">
      <div className="container">
        <h1 className="page-title">Our Blog Posts</h1>

        <div className="posts-grid">
          {allPosts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="post-info">
                <h2 className="post-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-author">by {post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
