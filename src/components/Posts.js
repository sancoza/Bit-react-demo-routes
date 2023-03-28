import { useEffect, useState } from 'react';
import './Posts.css';
import { useNavigate } from 'react-router';
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const onPostClick = (id) => {
    navigate(`/posts/${id}`);
  };
  const onUpdateClick = (id) => {
    navigate(`/posts/${id}/update`);
  };
  const onDeleteClick = (id) => {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if(res.status !== 200) {
          console.log('error');
          return;
        }
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      })
      
  };
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => navigate('/posts/create')}>Create New Post</button>
      <div>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3 onClick={() => onPostClick(post.id)}>{post.title}</h3>
            <button onClick={() => onUpdateClick(post.id)}>Update</button>
            <button onClick={() => onDeleteClick(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
