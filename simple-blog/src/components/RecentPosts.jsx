import "../styles/RecentPosts.css";

const dummyPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "October 8, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "October 6, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 30, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 29, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 28, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 25, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 23, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 21, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    author: "Person",
    date: "September 18, 2025",
    imageUrl: "https://placehold.co/600x400",
    link: "#",
  },
];

export default function RecentPosts() {
  return (
    <section className="recent-posts">
      <div className="container">
        <h2 className="section-title">Recent Posts</h2>

        <div className="posts-grid">
          {dummyPosts.map((post) => (
            <a key={post.id} href={post.link} className="post-card">
              <div className="post-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">by {post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="see-more-container">
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </section>
  );
}
