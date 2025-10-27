import { useParams } from "react-router-dom";
import "../styles/SinglePost.css";

function SinglePost() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "The Future of AI: Trends to Watch in 2025",
      date: "October 20, 2025",
      image: "/images/ai-future.jpg",
      content:
        "AI continues to transform industries with innovations in automation, creativity, and human-AI collaboration. In 2025, expect to see generative AI integrated into everyday tools, ethical AI frameworks gaining traction, and a focus on responsible deployment at scale...",
    },
    {
      id: 2,
      title: "How to Build a React App in 10 Minutes",
      date: "October 22, 2025",
      image: "/images/react-app.jpg",
      content:
        "Building a React app has never been easier with modern tools like Vite and Tailwind CSS. In this guide, we’ll walk through setting up your first app, understanding components, and deploying it live...",
    },
  ];

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="single-post">
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <img src={post.image} alt={post.title} className="post-image" />
      <p className="content">{post.content}</p>
    </div>
  );
}

export default SinglePost;
