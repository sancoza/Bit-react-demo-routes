import { useState } from 'react';
import { useNavigate } from 'react-router';

export const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreatePost = () => {
    setLoading(true);
    console.log({ title, body });
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log('error');
          setLoading(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log('create post:', data);
        navigate('/posts');
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <p>Title</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <p>Body</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        row="20"
      />
      <div>
        <button disabled={!title || !body || loading} onClick={onCreatePost}>
          Create Post
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};
